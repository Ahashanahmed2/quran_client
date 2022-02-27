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
export default function Book() {
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
        <Row className="d-grid justify-content-center ">
          <Col>
            <strong>Book</strong>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="বইয়ের নাম"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="বইয়ের নাম" />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col>
            <FloatingLabel controlId="floatingTextarea2" label="লেখকের পরিচিতি">
              <Form.Control
                as="textarea"
                placeholder="লেখকের পরিচিতি"
                style={{ height: "200px" }}
                className="mb-3"
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col>
            <FloatingLabel controlId="floatingTextarea2" label="ওহির তাৎর্পয়">
              <Form.Control
                as="textarea"
                placeholder="ওহির তাৎর্পয়"
                style={{ height: "300px" }}
                className="mb-3"
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="কোরআন নাজিলের ইতিহাস"
            >
              <Form.Control
                as="textarea"
                placeholder="কোরআন নাজিলের ইতিহাস"
                style={{ height: "400px" }}
                className="mb-3"
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="কোরআন সংরক্ষনের ইতিহাস"
            >
              <Form.Control
                as="textarea"
                placeholder="কোরআন সংরক্ষনের ইতিহাস"
                style={{ height: "400px" }}
                className="mb-3"
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="তাফসির সম্পর্কে ভুল ধারণা"
            >
              <Form.Control
                as="textarea"
                placeholder="তাফসির সম্পর্কে ভুল ধারণা"
                style={{ height: "400px" }}
                className="mb-3"
              />
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
