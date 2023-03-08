import {  FaRegCalendarTimes, FaShieldAlt, FaShieldVirus } from "react-icons/fa";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import hotel from "../../Assets/hotel6.png";
import offer1 from "../../Assets/offer1.jpg"
import offer2 from "../../Assets/offer2.jpg"
import offer3 from "../../Assets/offer3.jpg"
import events from "../../Assets/events.jpg"
import dinning from "../../Assets/dinning.jpg"
import stay from "../../Assets/stay.jpg"
import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import { Footer } from "../../footer";
import { Container,Card,Row,Col ,Button} from "react-bootstrap";




export const Home = () => {
  const meta = {
    title: "Hotel Phoenix",
    description:
      "A still forest of dense green, floating whispers of bird song the lake shimmers in the distance, walls of rock cool to touch.",
  };
  return (
    <HelmetProvider>
      
      <section id="home" className="home">
      <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
      <div> 
      <div className = "head-text">
        <div className = "h_bg-image order-1 order-lg-2 h-100">
          <img src={hotel} alt="hotel"  />
        </div>
      <div className=" center__text">
          
        <h2> {meta.title} </h2>
        <p> {meta.description} </p>
        <Link to="/login" className="text_2">
            <div id="button_p" className="ac_btn btn " >
                      BOOK NOW
                      
            </div>
        </Link>
      </div>
      </div>
      </div>
      </section>
  
      
    
        <section className="container-fluid welcome">
        <Container>
          <h1>OUR SERVICES</h1>
	      <div className="row" >
		      <div className="col-sm-8 col-sm-push-2 col-md-12 col-md-push-0 col-lg-10 col-lg-push-1">
			      <div className="wleft">
				      
					      <h4 >Hotel</h4>
                <h1 className="wtitle">Phoenix	</h1>	
              
            
				    <div className="seo-text">
					    <p>A still forest of dense green, floating whispers of bird song the lake shimmers in the distance, walls of rock cool to touch.</p>
				    </div>
            
				  </div> 
						
				    			
						<div className="wright">
				      <div className="why-book-us">	
					        <div className="title">Why book with us<span>?</span></div>
					        <div className="lable-wrap">
						      
                    
                    <div className="item">
                       <FaRegCalendarTimes/>
                       <div className="text">   24HR FREE CANCELLATION"</div>
                    </div>
                    <div className="item">
                       <FaShieldAlt/>
                       <div className="text">BEST RATE GUARANTEE"</div>
                    </div>
                    <div className="item">
                       <FaShieldVirus/>
                       <div className="text">SAFE AND SECURE RESORT"</div>
                    </div>
                    
														
                  </div>
              </div> 
			    </div>
					</div>
          </div>
        </Container>
        </section  >



        <section >
          <Container fluid>
          
          <div className = "head-text">
          <div>
          <img src={stay} alt="acc"/>
          </div>
          
          
          <div className=" center__text">
            <Row>
          <h1> STAY </h1>
          <p> We have different types of Accomodation according to your willing. You can choose your next vaccation here with our great services </p>
           </Row>
           <Row>
           <Link to="/rooms">
          <Button variant="outline-light" size="sm">
            READ MORE
          </Button>
          </Link>
          <Link to="/login">
          <Button variant="outline-light" size="sm">
            BOOK NOW
          </Button>
          </Link>
          </Row>
          </div>
          </div>
          </Container>
        </section>


        <section className=" welcome">
        <Container >
        <h1>OUR OFFERS</h1>
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
            <Link to="/offers">
          <Button variant="outline-light" size="lg">
            READ MORE
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
            <Link to="/offers">
          <Button variant="outline-light" size="lg">
            READ MORE
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
          <Link to="/offers">
          <Button variant="outline-light" size="lg">
            READ MORE
          </Button>
          </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    
        </Container>
        </section>
        <section className="container-fluid welcome">
        <Container>
           <h1>AT THE RESORT</h1>
        <Row xs={1} md={2} className="g-4">
      
        <Col>
          <Card>
            
            <Card.Body>
              <Card.Title>EVENTS</Card.Title>
              <Card.Text>
              Sri Lanka’s most inspirational venue for weddings, meetings and conferences
              </Card.Text>
              <div className="d-grid gap-2">
          <Link to="/events">
          <Button variant="outline-dark" size="lg">
            READ MORE
          </Button>
          </Link>
          </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={events} />
            
          </Card>
        </Col>
        <Col>
        <Card>
            <Card.Img variant="top" src={dinning} />
            
          </Card>
          <Card>
            
            <Card.Body>
              <Card.Title>DINING</Card.Title>
              <Card.Text>
              Well stocked with international and local choices to delight you.
              </Card.Text>
              <div className="d-grid gap-2">
          <Link to="/dining">
          <Button variant="outline-dark" size="lg">
            READ MORE
          </Button>
          </Link>
          </div>
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
        </Container>
        </section>
        <Footer/>
      </HelmetProvider> )}
          
          