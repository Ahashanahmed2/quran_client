import {Navbar, Container} from "react-bootstrap";
import TopInput from './TopInput'
import TopSubject from './TopSubject'
export default function Header() {
  return (
    <Navbar expand={false} className="bg-warning" sticky="top">
      <Container fluid>
        
        <TopSubject />
        
         
            <TopInput />
          
      </Container>
    </Navbar>
  );
}
