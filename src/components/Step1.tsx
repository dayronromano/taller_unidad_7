import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";


const Step1 = ({formData, next}:any) => {
    const {name} = formData.steps[0];
    const {nombres, apellidos, correo, telefono} = formData.steps[0].fields;

    const validationsStep1 = Yup.object({
        nombres: Yup.string().required('Nombres es requerido'),
        apellidos: Yup.string().required('Apellidos es requerido'),
        correo: Yup.string().email('Correo debe tener un formato valído').required('Correo es requerido'),
        telefono: Yup.string().required('Teléfono es requerido')
            .test('len', 'Debe tener entre 10 y 15 dígitos', val => {
                const len = val.toString().length;
                return len >= 10 && len <= 15;
            }),
    });

    const formik = useFormik({
        initialValues: {
            nombres: (nombres?.value || ''),
            apellidos: apellidos.value,
            correo: correo.value,
            telefono: telefono.value
        },
        validationSchema: validationsStep1,
        onSubmit: (values) => { next(values);}
    })

    return (
        <div>
            <h2>Paso 1. {name}</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="nombres">
                    <Form.Label>{nombres?.label}</Form.Label>
                    <Form.Control
                        name="nombres"
                        value={formik.values.nombres}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik?.errors?.nombres && !!formik.touched.nombres}
                        type="text" placeholder="Ingrese su nombre" />
                    <Form.Control.Feedback type="invalid">
                        {(formik.errors.nombres as string) || ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="apellidos">
                    <Form.Label>{apellidos?.label}</Form.Label>
                    <Form.Control
                        name="apellidos"
                        value={formik.values.apellidos}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.apellidos && !!formik.touched.apellidos}
                        type="text" placeholder="Ingrese sus apellidos" />
                    <Form.Control.Feedback type="invalid">
                        {(formik.errors.apellidos as string) || ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="correo">
                    <Form.Label>{correo?.label}</Form.Label>
                    <Form.Control
                        name="correo"
                        value={formik.values.correo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.correo && !!formik.touched.correo}
                        type="text" placeholder="Ingrese su correo" />
                    <Form.Control.Feedback type="invalid">
                        {(formik.errors.correo as string) || ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="telefono">
                    <Form.Label>{telefono?.label}</Form.Label>
                    <Form.Control
                        name="telefono"
                        value={formik.values.telefono}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.telefono && !!formik.touched.telefono}
                        type="text" placeholder="Ingrese su Teléfono" />
                    <Form.Control.Feedback type="invalid">
                        {(formik.errors.telefono as string) || ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" className="m-1" type="submit"> Siguiente</Button>
            </Form>
        </div>
    )

}

export default Step1;