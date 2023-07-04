import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";


const Step3 = ({ formData, next, back }: any) => {
    const { name } = formData.steps[2];
    const { empresa, cargo, fechaInicio, fechaFin } = formData.steps[2].fields;

    const validationsStep3 = Yup.object({
        empresa: Yup.string().required('Empresa es requerido'),
        cargo: Yup.string().required('Cargo es requerido'),
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
            empresa: empresa.value,
            cargo: cargo.value,
            fechaInicio: fechaInicio.value,
            fechaFin: fechaFin.value
        },
        validationSchema: validationsStep3,
        onSubmit: (values) => { next(values); }
    })

    return (
        <div>
            <h2>Paso 3. {name}</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="institucion">
                    <Form.Label>{empresa?.label}</Form.Label>
                    <Form.Control
                        name="empresa"
                        value={formik.values.empresa}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.empresa && !!formik.touched.empresa}
                        type="text" placeholder="Ingrese el nombre de la empresa" />
                    <Form.Control.Feedback type="invalid">
                        {(formik.errors.empresa as string) || ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="cargo">
                    <Form.Label>{cargo?.label}</Form.Label>
                    <Form.Control
                        name="cargo"
                        value={formik.values.cargo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.cargo && !!formik.touched.cargo}
                        type="text" placeholder="Ingrese el nombre del cargo" />
                    <Form.Control.Feedback type="invalid">
                        {(formik.errors.cargo as string) || ''}
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

export default Step3;