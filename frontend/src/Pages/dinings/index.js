import styles from "./styles.module.css";
import React from "react";
import { Footer } from "../../footer";
import dining2 from "../../Assets/dining.jpg"
import { Container ,Row, Table} from "react-bootstrap";

export const Dinings = () => {
    return(
        <div>
        <section className={styles.dining_container}>
            
            <Container className={styles.dining_form_container}>
                <Row className={styles.text}>
                <h1 >DINING</h1>
                </Row>
                <Row className={styles.text}>
                <p>High on the 6th floor, offering panoramic views from its full length glass windows,
                     the Phoenix Restaurant is our main dining area. Tempting spreads are laid at breakfast,
                      lunch and dinner plying you with an array of cuisine from traditional Sri Lankan to international fare.
                       Come nightfall, a flute plays sweet melodies, the stars glimmer, and a sumptuous barbecue sizzle.
                </p>
                </Row>
                
				<Row className={styles.text_col}><h4 >PHOENIX RESTAURANT</h4></Row>
				<Row className={styles.text}>
                    <Table border="5" className={styles.right}>
                    
                    <td >Opening Hours</td>
                    <td><span>Breakfast time : </span>6.30am – 10.00am</td>
                    <td><span>Lunch time : </span>12.30pm - 3.00pm</td>
                    <td><span>Dinner : </span>7.30pm - 10.00pm</td>
                    
                    </Table>
					
				</Row>
								
				<Row className={styles.text}>
					<h6>Reserve a table now by calling us on <a class="second" href="tel:+94665555000">+94 66 5555 000</a>
                    , All reservations must be made one day prior</h6>
				</Row>
				
                
            
               			
            
            </Container>
            
            
            
        </section>
        <section>
        <Container fluid>
                <img src={dining2} alt="poenix restuarent"/>
            </Container>
            <Footer/>
        </section>
        </div>
        

    )}

export default Dinings;