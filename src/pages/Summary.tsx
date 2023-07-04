import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ItemSummary from "../components/ItemSummary";
import { ISteps } from "../interfaces/interfaces";

const Summary = () => {
    const location = useLocation();
    const steps = location.state;

    return (
        <Container fluid style={{ marginTop: "15px" }}>
            <Row>
                <Col md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }} className="mr-auto ml-auto">
                    <div>
                        <h2>Resumen</h2>
                        {
                            steps.map((step: ISteps) => {
                                return <ItemSummary data={step} />
                            })
                        }
                    </div>
                    <Button variant="primary" className="m-1" href="/"> Finalizar</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Summary;

