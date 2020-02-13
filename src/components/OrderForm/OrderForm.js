import React from 'react'
import {
    Card, Button, CardGroup, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Carousel, Table
  } from 'react-bootstrap';
import { Route } from 'react-router-dom'
import Header from '../Header/AdminHeader'
import { Container } from 'reactstrap'
import Axios from 'axios';

class OrderForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            orders: [],
            config: {
                headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
            },
            selectedUsersData:{}
    }
    }

    componentDidMount(){
        Axios.get(
            "http://localhost:3024/order",
            this.state.config
        ).then((response) => {
            this.setState({
                orders: response.data
            });
            console.log(response.data)

        }).catch((err) => {
            console.log(err)
        })
    }

    handleDelete = (orderId) => {
        const filteredOrder = this.state.orders.filter((order)=> {
            return order._id !== orderId
        })
        this.setState({
            orders: filteredOrder
        })
        console.log(orderId.foodName);
        Axios.delete(
            `http://localhost:3024/order/${orderId}`,
            this.state.config
        ).then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
    return (
      <React.Fragment>
      <Route component = {Header} />
      <Container>
                <h2>Order details</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>foodName</th>
                            <th>foodPrice</th>
                            <th>foodCategory</th>
                            <th>foodDescription</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead> 
                    <tbody>
                        {
                            this.state.orders.map((order) => {
                                return (
                                    <tr key={order._id}>
                                        <td>{order.foodName}</td>
                                        <td>{order.foodPrice}</td>
                                        <td>{order.foodCategory}</td>
                                        <td>{order.foodDescription}</td>
                                        <td><Button onClick={() => this.handleDelete(order._id)}>Delete</Button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
      </React.Fragment>
    );
    };
  };

  export default OrderForm;
