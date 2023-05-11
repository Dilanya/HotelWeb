import styles from "./styles.module.css";
import React,{useState} from "react";
import { Container,Row,Col ,Button,Form} from "react-bootstrap";
import DatePicker from 'react-date-picker';
import axios from "axios";

export const Booknow = () => {
    const [ checkin, onChange] = useState(new Date());
    const [ checkout, onchange] = useState(new Date());
    const [data, setData] = useState({
		adults: "",
		children: "",
		rooms: "",
		roomtype: "",
        checkin: ("",checkin),
        checkout: ("",checkout),
        
	});
	
	const [error, setError] = useState("");
	//const navigate = useHistory();

    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/books";
			const { data: res } = await axios.post(url, data );
			
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
    return(
        <section className={styles.book_container}>
        
        <Container className={styles.form_container}> 
        <Row className={styles.text}>
                <h1 >Book Your Stay</h1>
        </Row>
        <Row >
        <Form className={styles.text} onSubmit={handleSubmit}>
        <Row>
        <Form.Group as={Col} >
          <Form.Label>Adults</Form.Label>
          <Form.Control as="Select" onChange={handleChange} value={data.adults} >
            
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Children</Form.Label>
          <Form.Control as="Select" onChange={handleChange} value={data.children} required>
            <option value="0">Zero</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Control>
        </Form.Group>
        </Row>
        <Form.Group >
          <Form.Label>Rooms</Form.Label>
          <Form.Control as="Select"onChange={handleChange}  value={data.rooms} required >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Control>
        </Form.Group>
        <Form.Group >
          <Form.Label>Room Type</Form.Label>
          <Form.Control as="Select" onChange={handleChange} value={data.roomtype} required >
            <option value="1">Superior</option>
            <option value="2">Luxury</option>
            <option value="3">Deluxe</option>
        </Form.Control>
        </Form.Group>
        <Row className={styles.text}>
        <Form.Group as={Col} >
          <Form.Label>Check-In</Form.Label>
          <DatePicker onChange={onChange} value={checkin}  />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Check-Out</Form.Label>
          <DatePicker onChange={onchange} value={checkout} />
        </Form.Group>
        </Row>
        {error && <div className={styles.error_msg}>{error}</div>}
      <Row className={styles.text}>
      <Button variant="outline-dark" type="submit">
        Submit
      </Button>
      </Row>
    </Form>
    </Row>
     </Container>   
     </section>
    )}

export default Booknow;