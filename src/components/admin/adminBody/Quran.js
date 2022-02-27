import { Card, Tab, ListGroup, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Quran() {
  const [quran, setQuran] = useState([]);
  useEffect(() => {
    axios
      .get("https://quran-a.herokuapp.com/quran",quran)
      .then((allquran) => {
        setQuran(allquran.data);
      })
      .catch((err) => console.log(err));
  }, []);

 

 
  return (
    <>
      <Row d-grid>
        <Col className="col-2 d-none d-md-block">
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Card border="secondary" style={{ width: "100%" }}>
            <Card.Header className="text-center text-dark">"hhhh"</Card.Header>

            <Card.Body>
              {quran.map((value, key) => (
                <Card.Text key={key}>
                  <div className="bg-secondary text-light p-1">
                    <div className="d-flex text font-weight-bold">
                      <p>
                        {value.verses}
                        <span className="bg-warning text-secondary mx-2 p-1 font-weight-bold">
                          [{value.name} - {value.number}:{value.versesNumber}]
                        </span>
                      </p>
                      <div className="mx-auto">
                        <Button type="button" className="btn btn-info">
                          Updat
                        </Button>
                        <Button type="button" className="btn btn-danger">
                          delete
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Tab.Container id="list-group-tabs-example">
                    <Row>
                      <Col>
                        <ListGroup>
                          <ListGroup.Item action href="#link1">
                            সারসংক্ষেপ"
                          </ListGroup.Item>
                          <ListGroup.Item action href="#link2">
                            আনুসঞ্জিক বিষয়
                          </ListGroup.Item>
                        </ListGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Tab.Content>
                          <Tab.Pane eventKey="#link1">{value.summary}</Tab.Pane>
                          <Tab.Pane eventKey="#link2">
                            {value.ancillary_issues}
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </Card.Text>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
