import { NavLink,useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Classess from "../../css/index.module.css";
export default function AdminHeader(){
     const navigate = useNavigate();
  return (
    <Container fluid className="bg-dark py-2 ">
      <Row>
        <Col
          onClick={() => navigate(-1)}
          className={`${Classess.active} ${Classess.hover}   border border-warning`}
        >
          GO BACK
        </Col>
        <Col>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${Classess.hover} ${Classess.active} mx-5 px-4 py-1 rounded-pill border border-warning`
                : `${Classess.hover} ${Classess.unActive} mx-5 px-4 py-1 rounded-pill border border-warning`
            }
            to="view"
          >
           view
          </NavLink>
        </Col>
        <Col>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${Classess.hover} ${Classess.active} mx-5 px-4 py-1 rounded-pill border border-warning`
                : `${Classess.hover} ${Classess.unActive} mx-5 px-4 py-1 rounded-pill border border-warning`
            }
            to="book"
          >
            book
          </NavLink>
        </Col>
        <Col>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${Classess.hover} ${Classess.active} mx-5 px-4 py-1 rounded-pill border border-warning`
                : `${Classess.hover} ${Classess.unActive} mx-5 px-4 py-1 rounded-pill border border-warning`
            }
            to="quran"
          >
            quran
          </NavLink>
        </Col>
        <Col>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${Classess.hover} ${Classess.active} mx-5 px-4 py-1 rounded-pill border border-warning`
                : `${Classess.hover} ${Classess.unActive} mx-5 px-4 py-1 rounded-pill border border-warning`
            }
            to="subject"
          >
            subject
          </NavLink>
        </Col>
        <Col
          onClick={() => navigate(1)}
          className={`${Classess.active} ${Classess.hover}  border border-warning`}
        >
          GO FORWARD
        </Col>
      </Row>
    </Container>
  );
};
