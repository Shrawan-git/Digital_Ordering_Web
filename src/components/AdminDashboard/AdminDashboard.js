import React from 'react'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
  } from 'reactstrap';

  const AdminDashboard = (props) => {
    return (
      <CardDeck>
        <Card>
          <CardImg top width="100%" src="./images/pizza1" alt="Card image cap" />
          <CardBody>
            <CardTitle>Users</CardTitle>
            <CardSubtitle>See the number of users</CardSubtitle>
            <Button>View users</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Orders</CardTitle>
            <CardSubtitle>See the number of users</CardSubtitle>
            <Button>View orders</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Ratings</CardTitle>
            <CardSubtitle>See all ratings</CardSubtitle>
            <Button>View ratings</Button>
          </CardBody>
        </Card>
      </CardDeck>
    );
  };

export default AdminDashboard
