import React from "react";
import { ListGroup, Row } from "react-bootstrap";


const ItemSummary = ({data}:any) => {
    const {name, fields} = data;

    return (
        <Row className="mb-5">
            <h3>{name}</h3>
            <ListGroup variant="flush">
                {
                    Object.keys(fields).map((key) => {
                        return <ListGroup.Item><strong>{fields[key].label} : </strong>{fields[key].value}</ListGroup.Item>;
                    })
                }
            </ListGroup>
        </Row>
    )

}

export default ItemSummary;