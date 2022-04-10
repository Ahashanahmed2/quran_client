import { NavLink,useNavigate } from "react-router-dom";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { useState } from "react";
import Classess from "../../css/index.module.css";
export default function AdminHeader(){
const [book, setBook] = useState("তাফসির গ্রন্থসমূহ");

     const navigate = useNavigate();

  const changeBookName = (e) => {
   
    if (e.target.name == "ibn kasir") {
      setBook(e.target.innerText);
      
    } else if (e.target.name == "ibn hamja") {
 
        setBook(e.target.innerText);
    } else if (e.target.name == "ibn hisham") {
      
        setBook(e.target.innerText);
}
  }
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
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {book}
            </Dropdown.Toggle>

            <Dropdown.Menu>
          

              <Dropdown.Item>
                <NavLink
                  name="ibn kasir"
                  onClick={(e) => changeBookName(e)}
                  className={({ isActive }) =>
                    isActive
                      ? `${Classess.hover} ${Classess.active} mx-2 px-2 py-1 rounded-pill border border-warning`
                      : `${Classess.hover} ${Classess.unActive} mx-2 px-2 py-1 rounded-pill border border-warning`
                  }
                  to="view/ইবনে কাসির"
                >
                  তাফসির ইবনে কাসির
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink
                  name="ibn hamja"
                  onClick={(e) => changeBookName(e)}
                  className={({ isActive }) =>
                    isActive
                      ? `${Classess.hover} ${Classess.active} mx-2 px-2 py-1 rounded-pill border border-warning`
                      : `${Classess.hover} ${Classess.unActive} mx-2 px-2 py-1 rounded-pill border border-warning`
                  }
                  to="view/ইবনে হামজা"
                >
                  তাফসির ইবনে হামজা
                </NavLink>
              </Dropdown.Item>
             
              <Dropdown.Item>
                <NavLink
                  name="ibn hisham"
                  onClick={(e) => changeBookName(e)}
                  className={({ isActive }) =>
                    isActive
                      ? `${Classess.hover} ${Classess.active} mx-2 px-2 py-1 rounded-pill border border-warning`
                      : `${Classess.hover} ${Classess.unActive} mx-2 px-2 py-1 rounded-pill border border-warning`
                  }
                  to="view/মারেফুল কোরআন"
                >
                  মারেফুল কোরআন
                </NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${Classess.hover} ${Classess.active} mx-2 px-2 py-1 rounded-pill border border-warning`
                : `${Classess.hover} ${Classess.unActive} mx-2 px-2 py-1 rounded-pill border border-warning`
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
                ? `${Classess.hover} ${Classess.active} mx-2 px-2 py-1 rounded-pill border border-warning`
                : `${Classess.hover} ${Classess.unActive} mx-2 px-2 py-1 rounded-pill border border-warning`
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
                ? `${Classess.hover} ${Classess.active} mx-2 px-2 py-1 rounded-pill border border-warning`
                : `${Classess.hover} ${Classess.unActive} mx-2 px-2 py-1 rounded-pill border border-warning`
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
