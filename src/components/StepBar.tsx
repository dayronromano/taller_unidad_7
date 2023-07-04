import React from "react";


const StepBar = ({ formData }: any) => {
    const { currentStep, steps } = formData;

    return (<ul id="progressbar">
        {
            steps.map((step: any, index: number) => {
                const init = index + 1;
                return <li className={(init < currentStep)? `active` : ((init == currentStep)? `current` : ``)} key={`step-${index}`}>
                    <strong>{`Paso ${init}`}</strong>
                </li>
            })
        }
    </ul>)

}

export default StepBar;