import React from "react";
import { ListGroup, Container, Row, Col,Badge } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = () => {
  return (
    <ListGroup.Item>
      <Container fluid>
        <Row>
          <Col>
            <EmpleadoAvatar></EmpleadoAvatar>
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <div>
            <p className="fw-bold">hola</p>
            <p className="fw-light">sapo</p>
            <Badge pill bg="primary">sin cola</Badge>
            </div>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
};

export default EmpleadoRow;
