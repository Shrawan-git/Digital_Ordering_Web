import React, {Component} from 'react'
import Notifications from "./Notifications";
import List from '../Project/List'
import { Route } from 'react-router-dom'
import Header from '../Header/UserHeader'

import {
    Card, Button, CardGroup, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Carousel
  } from 'react-bootstrap';

import Image from '../images/rating.png';
import SlideOne from '../images/slide1.jpg';
import SlideTwo from '../images/slide2.jpg';
import SlideThree from '../images/slide3.jpg';

class UserDashboard extends Component {
    render() {
        return (
          <React.Fragment>
          <Route component = {Header} />
    
          <Carousel className= "slider">
      <Carousel.Item>
        <img
        src={SlideOne}
        alt="First slide"
      />
        <Carousel.Caption>
          <h3 color="black">Best quality food </h3>
          <p color="black">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={SlideTwo}
          alt="First slide"
        />
    
        <Carousel.Caption>
          <h3 color="black">Web application </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={SlideThree}
          alt="Second slide"
        />
    
        <Carousel.Caption>
          <h3 color="black">Digital order for restaurant</h3>
          <p color="black"></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <CardDeck className = "layout">
          <Card bg="danger" text="white" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image} />
      <Card.Body>
        <Card.Title>Users</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="white" href="/userprofile">View users</Button>
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
     
    
    <Card bg="secondary" text="white" style={{ width: '18rem' }}>
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
    
export default UserDashboard