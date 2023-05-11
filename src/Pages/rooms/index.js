import styles from "./styles.module.css";
import React from "react";
import { Container,Card,Row,Col ,Button} from "react-bootstrap";
import {  GoSignIn,GoSignOut } from "react-icons/go";
import {MdBedroomChild} from "react-icons/md"
import { Link } from "react-router-dom";
import superior from "../../Assets/stay.jpg";
import deluxe from "../../Assets/DELUXE.jpg";
import luxury from "../../Assets/luxury.jpg";
import { Footer } from "../../footer";

export const Rooms = () => {
    return(
      <section className={styles.login_container}>
        <Row className={styles.text}>
        <h1 >ACCOMODATION</h1>
        </Row>
        <Container className={styles.box}>
        <Row className={styles.text}>
          <Col>
         <GoSignIn className={styles.icon}/>CHECK-IN 2.00PM
         </Col>
         <Col> 
         <GoSignOut className={styles.icon}/>CHECK-OUT 12.00PM 
         </Col> 
         <Col> 
         <MdBedroomChild className={styles.icon}/>ROOMS 100 
         </Col>       
        </Row>
        </Container>

    <Row >
    <Container className={styles.login_form_container}>
    <Card style={{backgroundColor:"white",border:"none"}}>
      <Card.Img variant="top" src={superior} />
      <Card.Body>
        <Card.Title >SUPERIOR ROOM</Card.Title>
        <Card.Text>
        In the heart of historic Sigiriya, accommodation of the most indulgent
         kind awaits you at our Superior Rooms. Set in the Dambulla Wing you can 
         relax in the comforts they offer and enjoy views either of the Sigiriya 
         Rock or the lush jungle, and the Dambulla Rock in the distance. After a day of exploring
         – or even just idling, it is a perfect refuge to return to a long shower.
        </Card.Text>
        <Link to="/login" className="text_2">
        <Button variant="outline-dark">BOOK NOW</Button> 
        </Link>
        
      </Card.Body>
    </Card>
    </Container>
    </Row>
    <Row >
    <Container className={styles.login_form_container}>
    <Card style={{backgroundColor:"white",border:"none"}}>
      <Card.Img variant="top" src={luxury} />
      <Card.Body>
        <Card.Title >LUXURY ROOM</Card.Title>
        <Card.Text>
        For a ‘beyond the ordinary’ holiday in Sri Lanka, luxury suites at Kandalama 
        offer you the ultimate in creature comforts. Panoramic views of Dambulla Rock 
        and the Kandalama Lake greet you from everywhere. Stretch on the living room sofa
         and watch a favourite movie, the four poster bed may also beckon for a quiet read,
          the spectacular views are just right for 
        that pre-dinner drink, but then, there is the Jacuzzi tempting you in too.
        </Card.Text>
        <Link to="/login" className="text_2">
        <Button variant="outline-dark">BOOK NOW</Button> 
        </Link>
        
      </Card.Body>
    </Card>
    </Container>
    </Row>
    <Row >
    <Container className={styles.login_form_container}>
    <Card style={{backgroundColor:"white",border:"none"}}>
      <Card.Img variant="top" src={deluxe} />
      <Card.Body>
        <Card.Title >DELUXE ROOM</Card.Title>
        <Card.Text>
        With expansive views over the Kandalama Lake, hotel amenities in our
         Deluxe Rooms are of the most delightful kind. You will find beauty
          within the room as well as without; with the elegant décor in earthy
         tones perfectly complementing the stately wood fittings and floor. All the cosy comforts you need are also 
        there to make it a special haven you feel instantly at home.
        </Card.Text>
        <Link to="/login" className="text_2">
        <Button variant="outline-dark">BOOK NOW</Button> 
        </Link>
        
      </Card.Body>
    </Card>
    </Container>
    </Row>
    <Footer/>
    </section>  
        

    )}

export default Rooms;