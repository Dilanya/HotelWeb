import { Container,Card,Row,Col } from "react-bootstrap";
import {  FaRegCalendarTimes, FaShieldAlt, FaShieldVirus } from "react-icons/fa";
import hotel from "../../Assets/services.jpg";
import { Footer } from "../../footer";
import styles from "./styles.module.css";
export const Services = () => {
    return(
        
        <section className="container-fluid welcome">
        <Container className={styles.services_form_container}>
        <Row className={styles.text}><h1>OUR SERVICES</h1></Row>
          <Row className={styles.text}>
          <Col>
          <Card >
            
            <Card.Body>
              
              <Card.Title>24HR FREE CANCELLATION</Card.Title>
              <FaRegCalendarTimes/>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            
            <Card.Body>
              
              <Card.Title>BEST RATE GUARANTEE</Card.Title>
              <FaShieldAlt/>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            
            <Card.Body>
              <Card.Title>SAFE AND SECURE RESORT</Card.Title>
              <FaShieldVirus/>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        </Row>
        
        </Container>
        <Container fluid>
        <Row>
            <img src={hotel} alt="hotel phoenix"/>
        </Row>
        </Container>
        <Footer/>
        </section>
        

    )}

export default Services;