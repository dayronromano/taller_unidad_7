
export interface IWizard {
    currentStep: number,
    steps: ISteps[];
}

export interface ISteps {
    name: string;
    fields: any;
}

