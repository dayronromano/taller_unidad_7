import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";


const Step5 = ({ formData, next, back }: any) => {
    const { name } = formData.steps[4];
    const { refer1_nombres, refer1_correo, refer1_telefono, refer2_nombres, refer2_correo, refer2_telefono } = formData.steps[4].fields;

    const validationsStep5 = Yup.object({
        refer1_nombres: Yup.string().required('Nombre referencia 1 es requerido'),
        refer1_correo: Yup.string().email('Correo referncia 1 debe tener un formato valído').required('Correo referencia 1 es requerido'),
        refer1_telefono: Yup.string().required('Teléfono referencia 1 es requerido')
            .test('len', 'Debe tener entre 10 y 15 dígitos', val => {
                const len = val.toString().length;
                return len >= 10 && len <= 15;
            }),
        refer2_nombres: Yup.string().required('Nombre referencia 2 es requerido'),
        refer2_correo: Yup.string().email('Correo referencia 2 debe tener un formato valído').required('Correo referencia 2 es requerido'),
        refer2_telefono: Yup.string().required('Teléfono referencia 2 es requerido')
            .test('len', 'Debe tener entre 10 y 15 dígitos', val => {
                const len = val.toString().length;
                return len >= 10 && len <= 15;
            }),
    });

    const formik = useFormik({
        initialValues: {
            refer1_nombres: refer1_nombres.value,
            refer1_correo: refer1_correo.value,
            refer1_telefono: refer1_telefono.value,
            refer2_nombres: refer2_nombres.value,
            refer2_correo: refer2_correo.value,
            refer2_telefono: refer2_telefono.value
        },
        validationSchema: validationsStep5,
        onSubmit: (values) => { next(values); }
    })

    return (
        <div>
            <h2>Paso 5. {name}</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="refer1_nombres">
                    <Form.Label>{refer1_nombres?.label}</Form.Label>
                    <Form.Control
                        name="refer1_nombres"
                        value={formik.values.refer1_nombres}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.refer1_nombres && !!formik.touched.refer1_nombres}
                        type="text" placeholder="Ingrese nombres referencia 1" />
                    <Form.Control.Feedback type="invalid">
                        {(formik.errors.refer1_nombres as string) || ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="refer1_correo">
                    <Form.Label>{refer1_correo?.label}</Form.Label>
                    <Form.Control
                        name="refer1_correo"
                        value={formik.values.refer1_correo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.refer1_correo && !!formik.touched.refer1_correo}
                        type="email" placeholder="Ingrese correo referencia 1" />
                    <Form.Control.Feedback type="invalid">
                        {(formik.errors.refer1_correo as string) || ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="refer1_telefono">
                    <Form.Label>{refer1_telefono?.label}</Form.Label>
                    <Form.Control
                        name="refer1_telefono"
                        value={formik.values.refer1_telefono}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.refer1_telefono && !!formik.touched.refer1_telefono}
                        type="text" placeholder="Ingrese Teléfono referencia 1" />
                    <Form.Control.Feedback type="invalid">
                        {(formik.errors.refer1_telefono as string) || ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="refer2_nombres">
                    <Form.Label>{refer2_nombres?.label}</Form.Label>
                    <Form.Control
                        name="refer2_nombres"
                        value={formik.values.refer2_nombres}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.refer2_nombres && !!formik.touched.refer2_nombres}
                        type="text" placeholder="Ingrese nombres referencia 2" />
                    <Form.Control.Feedback type="invalid">
                        {(formik.errors.refer2_nombres as string) || ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="refer2_correo">
                    <Form.Label>{refer2_correo?.label}</Form.Label>
                    <Form.Control
                        name="refer2_correo"
                        value={formik.values.refer2_correo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.refer2_correo && !!formik.touched.refer2_correo}
                        type="email" placeholder="Ingrese correo referencia 2" />
                    <Form.Control.Feedback type="invalid">
                        {(formik.errors.refer2_correo as string) || ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="refer2_telefono">
                    <Form.Label>{refer2_telefono?.label}</Form.Label>
                    <Form.Control
                        name="refer2_telefono"
                        value={formik.values.refer2_telefono}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.refer2_telefono && !!formik.touched.refer2_telefono}
                        type="text" placeholder="Ingrese Teléfono referencia 2" />
                    <Form.Control.Feedback type="invalid">
                        {(formik.errors.refer2_telefono as string) || ''}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="secondary" className="m-1" type="submit" onClick={back}> Atrás</Button>
                <Button variant="primary" className="m-1" type="submit"> Enviar</Button>
            </Form>
        </div>
    )

}

export default Step5;