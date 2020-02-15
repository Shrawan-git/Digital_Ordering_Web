import React from 'react'
import {
    Card, Button, CardGroup, Container, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Carousel, Table, Modal, Form
  } from 'react-bootstrap';
import { Route } from 'react-router-dom'
import Header from '../Header/UserHeader'
import Axios from 'axios';

export default class UserOrder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            orders: [],
            foodName: "",
            foodPrice: "",
            foodCategory:"",
            foodDescription:"",
            config: {
                headers: {"Authorization": `Bearer ${localStorage.getItem("usertoken")}`}
            },
            show: false,
            selectedOrderData:{}
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

    handleAdd = (e) => {
        var addFood = {
            foodName: this.state.foodName,
            foodPrice: this.state.foodPrice,
            foodCategory: this.state.foodCategory
        }
        console.log(addFood);
        Axios.post(
            "http://localhost:3024/userorder",
            addFood,
            this.state.config

        ).then((response) => {
            console.log(response.data);
            location.href = "/userorder"
        }).catch((err) => {
            console.log(err)
        })
    }

    foodNameHandler = (e) => {
        this.setState({foodName: e.target.value})
    }
    foodPriceHandler = (e) => {
        this.setState({foodPrice: e.target.value})
    }
    foodCategoryHandler = (e) => {
        this.setState({foodCategory: e.target.value})
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
                                <th>Order Food</th>
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
                                            <td><Button onClick={this.handleAdd(order._id)}>Order</Button></td>
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

