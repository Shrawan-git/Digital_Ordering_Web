import React from 'react'
import {
    Card, Button, CardGroup, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Carousel
  } from 'react-bootstrap';
import { Route } from 'react-router-dom'
import Header from '../Header/AdminHeader'
import './AdminDashboard.css'
import Image from '../images/rating.png';

class AdminDashboard extends React.Component {
    render() {
    return (
      <React.Fragment>
      <Route component = {Header} />

<CardDeck className = "layout">
      <Card bg="primary" text="white" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image} />
  <Card.Body>
    <Card.Title>Users</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="white">View users</Button>
  </Card.Body>
</Card>
      
<Card bg="primary" text="white" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image} />
  <Card.Body>
    <Card.Title>Orders</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="white">View orders</Button>
  </Card.Body>
</Card>
 

<Card bg="primary" text="white" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image} />
  <Card.Body>
    <Card.Title>Feedbacks</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="white">Feedbacks</Button>
  </Card.Body>
</Card>
  </CardDeck>
 
     </React.Fragment>
    );
    };
  };

  export default AdminDashboard;