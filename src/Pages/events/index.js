import styles from "./styles.module.css";
import React from "react";
import { Container,Card,Button,Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import events from "../../Assets/events2.jpg";
import { Footer } from "../../footer";

export const Events = () => {
    return(
        
        <section>
            <Row className={styles.text}>
        <h1 >EVENTS</h1>
        </Row>
            <Container className={styles.login_form_container}>
    <Card style={{backgroundColor:"white",border:"none"}}>
      <Card.Img variant="top" src={events} />
      <Card.Body>
        <Card.Title >WEDDINGS</Card.Title>
        <Card.Text>
        Purge the pressures of the workplace at the new Heritance Kandalama Conference Centre – 
        Sri Lanka’s most inspirational venue for retreats, meetings and conferences
        </Card.Text>
        <Link to="/login" className="text_2">
        <Button variant="outline-dark">BOOK NOW</Button> 
        </Link>
        
      </Card.Body>
    </Card>
    </Container>
    <Footer/>
        </section>
        

    )}

export default Events;