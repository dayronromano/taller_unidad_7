import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";


const Step4 = ({ formData, next, back }: any) => {
    const { name } = formData.steps[3];
    const { biografia } = formData.steps[3].fields;

    const validationsStep4 = Yup.object({
        biografia: Yup.string().required('Biografía es requerida'),
    });

    const formik = useFormik({
        initialValues: {
            biografia: biografia.value,
        },
        validationSchema: validationsStep4,
        onSubmit: (values) => { next(values); }
    })

    return (
        <div>
            <h2>Paso 4. {name}</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="biografia">
                    <Form.Label>{biografia?.label}</Form.Label>
                    <Form.Control
                        name="biografia"
                        value={formik.values.biografia}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.biografia && !!formik.touched.biografia}
                        as="textarea" placeholder="Ingrese su biografía" />
                    <Form.Control.Feedback type="invalid">
                        {(formik.errors.biografia as string) || ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="secondary" className="m-1" type="submit" onClick={back}> Atrás</Button>
                <Button variant="primary" className="m-1" type="submit"> Siguiente</Button>
            </Form>
        </div>
    )

}

export default Step4;