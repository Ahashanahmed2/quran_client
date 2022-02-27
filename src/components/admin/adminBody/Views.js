
import {

  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

//Admin Body
import Book from "../adminPost/Book";
import Quran from "./Quran.js";
import Subject from "./Subject.js";

export default function Views() {
  return (
    <Container>
      <Row>
        <Col>
          <Quran />
        </Col>
      </Row>
      <Row>
        <Col>
         
          <Book />
        </Col>
      </Row>
      <Row>
        <Col>
          <Subject />
        </Col>
      </Row>
    </Container>
  );
}
