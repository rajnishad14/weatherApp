import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const CityWeather = ({
    city,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    condition }) => {
  return (
    <Container>
      <Card>
        <Card.Header>Weather in <strong>{city}</strong></Card.Header>
        <Card.Body>
          <Card.Title>Temperature: {Math.round(temp-273)}</Card.Title>
          <Card.Text>
                Feels Like: {Math.round(feels_like-273)}
                <br/>
                Minimum: {Math.round(temp_min-273)}
                <br/> 
                Maximum: {Math.round(temp_max-273)}
          </Card.Text>
          <Card.Title>Pressure: {pressure} hpa</Card.Title>
          <Card.Title>Condition: {condition}</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CityWeather;
