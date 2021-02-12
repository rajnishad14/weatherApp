import React from "react";
import { Form, Button, Container } from "react-bootstrap";
const CityInput = ({city,setCity,fetchCityWeather}) => {
    
    const [error,setError]=React.useState("")
    const handleChange=(event)=>{
        setCity(event.target.value);
    }
    const handleClick=()=>{
        if(!city){
            setError("City Feild is empty!");
        }else{
            setError("");
            fetchCityWeather();
        }
    }
  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter city"
          value={city}
          onChange={handleChange} />
          <Form.Text className="text-muted">
            Enter city which weather you wan to fetch.
          </Form.Text>
          <p className="text-danger">{error}</p>
        </Form.Group>
        <Button variant="primary" onClick={handleClick}>Submit</Button>
      </Form>
    </Container>
  );
};

export default CityInput;
