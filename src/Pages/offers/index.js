import styles from "./styles.module.css";
import React from "react";
import { Container,Button} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import offer1 from "../../Assets/offer1.jpg"
import offer2 from "../../Assets/offer2.jpg"
import offer3 from "../../Assets/offer3.jpg"
import { Footer } from "../../footer";

export const Offers = () => {
    return(
        
        <section className={styles.offer_container}>
        <Container >
        <h1 >OUR OFFERS</h1>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={offer1}
          alt="member offer"
        />
        <Carousel.Caption>
          <h3>Member offer at Phoenix</h3>
          <p>10% off from the total room rate
            Combinable with extra 10% off Secret Deal signups
            Offer applicable only for non Sri Lankan residents</p>
          <div className="d-grid gap-2">
            <Link to="/login">
          <Button variant="outline-light" size="lg">
            BOOK NOW
          </Button>
          </Link>
          </div>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={offer2}
          alt="basic offer"
        />

        <Carousel.Caption>
          <h3>Basic offer at Phoenix</h3>
          <p>10% off from the total room rate
            Combinable with extra 10% off Secret Deal signups
            Offer applicable only for non Sri Lankan residents</p>
            <div className="d-grid gap-2">
            <Link to="/login">
          <Button variant="outline-light" size="lg">
            BOOK NOW
          </Button>
          </Link>
          </div>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={offer3}
          alt="long stay offer"
        />

        <Carousel.Caption>
          <h3>Long stay offer at Phoenix</h3>
          <p>
          15% off from the total room rate
          Offer is only valid for 3 or more nights stays
          Combinable with extra 10% off Secret Deal signups
          Offer applicable only for non Sri Lankan residents
          </p>
          <div className="d-grid gap-2">
          <Link to="/login">
          <Button variant="outline-light" size="lg">
            BOOK NOW
          </Button>
          </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    
        </Container>
        <Footer/>
        </section>
        

    )}

export default Offers;