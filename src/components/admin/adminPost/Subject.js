import Classess from "../../../css/index.module.css";
import { NavLink } from "react-router-dom";
import {
  Form,
  FloatingLabel,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

export default function Subject() {
  
  return (
    <>
      <div className="d-flex flex-column mt-5 mx-auto">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${Classess.deleteUpdateHover} ${Classess.deleteUpdateActive} px-4   border border-warning`
              : `${Classess.deleteUpdateHover} ${Classess.deleteUpdateUnActive} px-4  border border-info`
          }
          to="book"
        >
          <h5>Edite And Delete</h5>
        </NavLink>
      </div>
      <Container>
        <Row className="d-grid justify-content-center">
          <Col>
            <strong>Subject</strong>
          </Col>
        </Row>
        <Row className={Classess.center2}>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="সাবজেক্ট নাম"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="সাবজেক্ট নাম" />
            </FloatingLabel>
          </Col>
        </Row>

        <div className="d-grid gap-2">
          <Button className="mb-3" variant="secondary" size="sm">
            BOOk Input Submit
          </Button>
        </div>
      </Container>
    </>
  );
}
