import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";


const Step2 = ({ formData, next, back }: any) => {
    const { name } = formData.steps[1];
    const { institucion, carrera, fechaInicio, fechaFin } = formData.steps[1].fields;

    const validationsStep2 = Yup.object({
        institucion: Yup.string().required('Institución es requerido'),
        carrera: Yup.string().required('Titulo de la carrera es requerido'),
        fechaInicio: Yup.date().required('Fecha de Inicio es requerida'),
        fechaFin: Yup.date()
            .required('La fecha de Fin es requerida')
            .min(
                Yup.ref('fechaInicio'),
                'La fecha de fin debe ser posterior o igual a la fecha de inicio'
            ),
    });

    const formik = useFormik({
        initialValues: {
            institucion: institucion.value,
            carrera: carrera.value,
            fechaInicio: fechaInicio.value,
            fechaFin: fechaFin.value
        },
        validationSchema: validationsStep2,
        onSubmit: (values) => { next(values); }
    })

    return (
        <div>
            <h2>Paso 2. {name}</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="institucion">
                    <Form.Label>{institucion?.label}</Form.Label>
                    <Form.Control
                        name="institucion"
                        value={formik.values.institucion}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.institucion && !!formik.touched.institucion}
                        type="text" placeholder="Ingrese el nombre de la institución" />
                    <Form.Control.Feedback type="invalid">
                        {(formik.errors.institucion as string) || ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="carrera">
                    <Form.Label>{carrera?.label}</Form.Label>
                    <Form.Control
                        name="carrera"
                        value={formik.values.carrera}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.carrera && !!formik.touched.carrera}
                        type="text" placeholder="Ingrese el nombre de la carrera" />
                    <Form.Control.Feedback type="invalid">
                        {(formik.errors.carrera as string) || ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="fechaInicio">
                    <Form.Label>{fechaInicio?.label}</Form.Label>
                    <Form.Control
                        name="fechaInicio"
                        value={formik.values.fechaInicio}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.fechaInicio && !!formik.touched.fechaInicio}
                        type="date" placeholder="Ingrese la fecha de inicio" />
                    <Form.Control.Feedback type="invalid">
                        {(formik.errors.fechaInicio as string) || ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="fechaFin">
                    <Form.Label>{fechaFin?.label}</Form.Label>
                    <Form.Control
                        name="fechaFin"
                        value={formik.values.fechaFin}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.fechaFin && !!formik.touched.fechaFin}
                        type="date" placeholder="Ingrese la fecha de finalización" />
                    <Form.Control.Feedback type="invalid">
                        {(formik.errors.fechaFin as string) || ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="secondary" className="m-1" type="submit" onClick={back}> Atrás</Button>
                <Button variant="primary" className="m-1" type="submit"> Siguiente</Button>
            </Form>
        </div>
    )

}

export default Step2;