import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header/UserHeader'

import {
    Card, Button, CardGroup, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Carousel
  } from 'react-bootstrap';

import Image from '../images/rating.png';
import ImageProfile from '../images/profilefront.jpg';
import ImageOrder from '../images/orderfood.jpg';
import ImageFav from '../images/fav.jpg';
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
      <Card.Img variant="top" src={ImageProfile} />
      <Card.Body>
        <Card.Title>My Profile</Card.Title>
        <Card.Text>
          Check your profile
        </Card.Text>
        <Button variant="white" href="/userprofile">View users</Button>
      </Card.Body>
    </Card>
          
    <Card bg="primary" text="white" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ImageOrder} />
      <Card.Body>
        <Card.Title>Food Menu</Card.Title>
        <Card.Text>
          Order some food
        </Card.Text>
        <Button variant="white" href="/userorder">View Menu</Button>
      </Card.Body>
    </Card>
     
    <Card bg="secondary" text="white" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ImageFav} />
      <Card.Body>
        <Card.Title>Favourites</Card.Title>
        <Card.Text>
          See your favourite meals
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