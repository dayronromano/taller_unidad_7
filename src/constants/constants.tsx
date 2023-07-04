import { IWizard } from '../interfaces/interfaces';

export const INIT_STATE: IWizard = {
    currentStep: 1,
    steps: [{
        name: 'Datos Basícos',
        fields: {
            nombres: { label: 'Nombres', value: '' },
            apellidos: { label: 'Apellidos', value: '' },
            correo: { label: 'Correo', value: '' },
            telefono: { label: 'Teléfono', value: '' }
        }
    }, {
        name: 'Información Educativa',
        fields: {
            institucion: { label: 'Nombre de la Institución', value: '' },
            carrera: { label: 'Nombre de la Carrera', value: '' },
            fechaInicio: { label: 'Fecha de Inicio', value: '' },
            fechaFin: { label: 'Fecha de Finalización', value: '' }
        }
    }, {
        name: 'Experiencia Laboral',
        fields: {
            empresa: { label: 'Nombre de la Empresa', value: '' },
            cargo: { label: 'Cargo desempeñado', value: '' },
            fechaInicio: { label: 'Fecha de Inicio', value: '' },
            fechaFin: { label: 'Fecha de Finalización', value: '' }
        }
    }, {
        name: 'Biografía',
        fields: {
            biografia: { label: 'Biografía', value: '' },
        }
    }, {
        name: 'Referencias',
        fields: {
            refer1_nombres: { label: 'Nombres referencia 1', value: '' },
            refer1_correo: { label: 'Correo referencia 1', value: '' },
            refer1_telefono: { label: 'Teléfono referencia 1', value: '' },
            refer2_nombres: { label: 'Nombres referencia 2', value: '' },
            refer2_correo: { label: 'Correo referencia 2', value: '' },
            refer2_telefono: { label: 'Teléfono referencia 2', value: '' }
        }
    }]
}