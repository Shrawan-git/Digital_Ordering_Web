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
    <Card.Text>Check your users 
    </Card.Text>
    <Button variant="white" href="/userform">View users</Button>
  </Card.Body>
</Card>
      
<Card bg="primary" text="white" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image} />
  <Card.Body>
    <Card.Title>Products</Card.Title>
    <Card.Text>Handle your products
    </Card.Text>
    <Button variant="white" href="/orderform">View Products</Button>
  </Card.Body>
</Card>

<Card bg="primary" text="white" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image} />
  <Card.Body>
    <Card.Title>Add Product</Card.Title>
    <Card.Text>Add new products to the menu 
    </Card.Text>
    <Button variant="white" href="/addproduct">Add Product</Button>
  </Card.Body>
</Card>
 
<Card bg="primary" text="white" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image} />
  <Card.Body>
    <Card.Title>Feedbacks</Card.Title>
    <Card.Text>Check what your users have things to say about your products 
    </Card.Text>
    <Button variant="white" href="/feedbackform">Feedbacks</Button>
  </Card.Body>
</Card>


  </CardDeck>
 
     </React.Fragment>
    );
    };
  };

  export default AdminDashboard;