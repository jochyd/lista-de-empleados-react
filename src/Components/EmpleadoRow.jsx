import React from "react";
import { ListGroup, Container, Row, Col, Badge } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({empleado}) => {
  return (
    <ListGroup.Item>
      <Container fluid>
        <Row>
          <Col>
            <EmpleadoAvatar empleado={empleado}></EmpleadoAvatar>
          </Col>
            <Col className="d-flex flex-column justify-content-center">
              <div>
              <p className="fw-bold">{empleado.fullName}</p>
              <p className="fw-light">{empleado.title}</p>
              <Badge pill bg="primary">{empleado.department}</Badge>
              </div>
            </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
};

export default EmpleadoRow;
