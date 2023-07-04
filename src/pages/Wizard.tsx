import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import StepBar from "../components/StepBar";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step5 from "../components/Step5";
import { IWizard } from "../interfaces/interfaces";
import { INIT_STATE } from "../constants/constants";

const Wizard = () => {
    const navigate = useNavigate();

    const [state, setState] = useState<IWizard>(INIT_STATE);

    const next = (values: any) => {
        const position = state.currentStep - 1;
        const steps = state.steps;
        if (steps[position]) {
            Object.keys(values).map((key, index) => {
                if (steps[position].fields.hasOwnProperty(key)) {
                    steps[position].fields[key].value = values[key];
                }
            });
            setState({ ...state, currentStep: state.currentStep + 1, steps });
        }
    }

    const back = () => {
        setState({ ...state, currentStep: state.currentStep - 1 });
    }

    const finish = (values: any) => {
        const position = state.currentStep - 1;
        const steps = state.steps;
        if (steps[position]) {
            Object.keys(values).map((key, index) => {
                if (steps[position].fields.hasOwnProperty(key)) {
                    steps[position].fields[key].value = values[key];
                }
            });
            setState({ ...state, steps });
            navigate('/summary', { state: steps });
        }
    }

    return (
        <Container fluid style={{ marginTop: "15px" }}>
            <Row>
                <Col md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }} className="mr-auto ml-auto">
                    <div>
                        <StepBar formData={state} />
                        {
                            (state.currentStep == 1) ? (<Step1 formData={state} next={next} />) :
                                ((state.currentStep == 2) ? (<Step2 formData={state} next={next} back={back} />) :
                                    ((state.currentStep == 3) ? (<Step3 formData={state} next={next} back={back} />) :
                                        ((state.currentStep == 4) ? (<Step4 formData={state} next={next} back={back} />) :
                                            (<Step5 formData={state} next={finish} back={back} />))))
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Wizard;