import React, { useState } from "react";
import styles from "./styles.module.css";

import {  Row, Col,Container,Button,Form,} from "react-bootstrap";
import { Link } from "react-router-dom";
import * as emailjs from "emailjs-com";



export const Footer = () => {

    const [isActive, setActive] = useState("false");
const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: "dilanyasamarakoon@gmail.com",
      message: formData.message,
    };

    emailjs
      .send(
        
        templateParams,
        
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! ,Thankyou for your messege",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Faild to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    return(
    
<footer className={styles.footer_container} >
	
<Container fluid >
		<Row >
            <Col >
                <ul className={styles.footer_menu}>
                    <li className={styles.footer_menu_text}><Link  onClick={handleToggle} to="/" >Home</Link></li>
                    <li ><Link  onClick={handleToggle} to="/services" >Services</Link></li>
                    <li ><Link  onClick={handleToggle} to="/signin" >Register</Link></li>
                    <li ><Link  onClick={handleToggle} to="/dining" >Dinnigs</Link></li>
                    <li ><Link  onClick={handleToggle} to="/offers">Offers</Link></li>
                    <li ><Link  onClick={handleToggle} to="/rooms" >Accomodation</Link></li>
                    <li ><Link  onClick={handleToggle} to="/events" >Events</Link></li>
                </ul>                    
            </Col>                    
            <Col>				
                      <div className="block">
                          Phoenix Hotel PO Box 11, Colombo,<br/> Sri Lanka.									
                      </div>
              <div className="block">
                          <h6>tel: +94666666000</h6>
                      </div>					
                      <div className="block">
                          <h6>mailto: info@phoenixhotels.com</h6> 
                                          
                      </div>
            </Col>							 			
           <Col xs={6} >
              
                  <Form onSubmit={handleSubmit}>
                  
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              
                  <Form.Control 
                  className="form-control"

                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name || ""}
                  type="text"
                  required
                  onChange={handleChange} />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              
                  <Form.Control 
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formData.email || ""}
                  required
                  onChange={handleChange} />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                
                    <Form.Control 
                    className="form-control "
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={5}
                    as="textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required  />
                    </Form.Group>
                    
                  <Button type="submit" variant="outline-dark">{formData.loading ? "Sending..." : "Send"}</Button>
                  
                  </Form>	
                  		
                  
                  
                      
                    
              </Col>   
  </Row>             
              <Row className={styles.footer_site}>
                  <Col >
                  Terms and Conditions
                  Privacy Policy
                  </Col>
                  <Col  >
                  All copyrights reserved by Phoenix Hotel - © 2022
                  </Col>				
              </Row>
              
  </Container>      
</footer>

        
  );
};

 