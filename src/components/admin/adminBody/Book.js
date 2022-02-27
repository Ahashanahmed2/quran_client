import { Card,Container, Row, Col, Button } from "react-bootstrap";

export default function Subject() {
  return (
    <Container>
      <h3 className="text-center">BOOK</h3>
      <Row>
        <Col>
          <Card border="secondary" style={{ width: "100%" }}>
            <Card.Header className="text-center text-dark">
              <Row>
                <Col>বাকারা</Col>
                <Col>
                  <div className="mx-auto">
                    <Button type="button" className="btn btn-info">
                      Updat
                    </Button>
                    <Button type="button" className="btn btn-danger">
                      delete
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <div className="bg-secondary text-light p-1">
                  <div className="d-flex text font-weight-bold">
                    <p>
                      শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।
                      <span className="bg-warning text-secondary mx-2 p-1 font-weight-bold">
                        [সুরা ফাতিহা - ১:১]
                      </span>
                    </p>
                  </div>
                </div>
              </Card.Text>
              <Card.Text>
                <div className="bg-secondary text-light p-1">
                  <div className="d-flex text font-weight-bold">
                    <p>
                      শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।
                      <span className="bg-warning text-secondary mx-2 p-1 font-weight-bold">
                        [সুরা ফাতিহা - ১:১]
                      </span>
                    </p>
                  </div>
                </div>
              </Card.Text>
              <Card.Text>
                <div className="bg-secondary text-light p-1">
                  <div className="d-flex text font-weight-bold">
                    <p>
                      শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।
                      <span className="bg-warning text-secondary mx-2 p-1 font-weight-bold">
                        [সুরা ফাতিহা - ১:১]
                      </span>
                    </p>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
