
import { Container,Row,Col} from "react-bootstrap";


export default function CenterSubject() {
  
  return (
    <Container className="text - center" >
     
     
      <h3 className="mt-2 ">কোরআন শরিফের বিষয় সমূহ:</h3>
      <h2 className="mt-2 ">
        <small>
          আরো কোন বিষয় জানতে চান? সেই বিষয়টা সা্রচ করুন,যদি তাফসিরের কোন স্হানে
          উক্ত বিষয়টা থাকে,ইন্শাআল্লাহ পাবেন..
        </small>
      </h2>
      <Row sm={2} xs={1} md={3}>
       
        <Col>১। সুরা ফাতিহা</Col>

        <Col>২। সুরা বাকারা</Col>

        <Col>৩। সুরা ইমরান</Col>
        <Col>১। সুরা ফাতিহা</Col>

        <Col>২। সুরা বাকারা</Col>

        <Col>৩। সুরা ইমরান</Col>
        <Col>১। সুরা ফাতিহা</Col>

        <Col>২। সুরা বাকারা</Col>

        <Col>৩। সুরা ইমরান</Col>
        <Col>১। সুরা ফাতিহা</Col>

        <Col>২। সুরা বাকারা</Col>

        <Col>৩। সুরা ইমরান</Col>
        <Col>১। সুরা ফাতিহা</Col>

        <Col>২। সুরা বাকারা</Col>

        <Col>৩। সুরা ইমরান</Col>
      </Row>
    </Container>
  );
}
