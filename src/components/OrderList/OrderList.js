import React from 'react'
import {
    Card, Button, CardGroup, Container, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Carousel, Table, Modal, Form
  } from 'react-bootstrap';
import { Route } from 'react-router-dom'
import Header from '../Header/AdminHeader'
import Axios from 'axios';

export default class OrderList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            orders: [],
            foodName: "",
            foodPrice: "",
            foodCategory:"",
            foodDescription:"",
            config: {
                headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
            },
            selectedOrderData:{}
    }
    }

    componentDidMount(){
        Axios.get(
            "http://localhost:3024/userorder/list",
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
            `http://localhost:3024/userorder/${orderId}`,
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
                <h2>Order List</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>foodName</th>
                            <th>foodPrice</th>
                            <th>foodCategory</th>
                            <th>foodDescription</th>
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
                                        <td></td>
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


