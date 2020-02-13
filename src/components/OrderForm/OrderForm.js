import React from 'react'
import {
    Card, Button, CardGroup, Container, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Carousel, Table, Modal, Form
  } from 'react-bootstrap';
import { Route } from 'react-router-dom'
import Header from '../Header/AdminHeader'
import Axios from 'axios';

export default class OrderForm extends React.Component {
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

    handleClose = () => {
        this.setState({
            show: false,
            
        })
    }

    handleOpen = (orderId) => {
        this.setState({
            show:true,
            selectedOrderData:this.state.orders.find((order) => {
                return order._id === orderId
            })
        })
    }

    handleUpdate = (updatedOrder) => {
        console.log(this.state.orders);
        Axios.put(
            `http://localhost:3024/order/${updatedOrder}`,
            this.state.selectedOrderData,
            this.state.config
        )
        .then((response) => {
            console.log(response)
            location.href = "/orderform"
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

    foodNameUpdateHandler = (e) => {
        this.setState({selectedOrderData:{...this.state.selectedOrderData,["foodName"]: e.target.value}})
    }

    foodPriceUpdateHandler = (e) => {
        this.setState({selectedOrderData:{...this.state.selectedOrderData,["foodPrice"]: e.target.value}})
    }

    foodCategoryUpdateHandler = (e) => {
        this.setState({selectedOrderData:{...this.state.selectedOrderData,["foodCategory"]: e.target.value}})
    }

    foodDescriptionUpdateHandler = (e) => {
        this.setState({selectedOrderData:{...this.state.selectedOrderData,["foodDescription"]: e.target.value}})
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
                            <th>Update</th>
                            
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
                                        <td><Button onClick={() => this.handleOpen(order._id)}>update</Button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formEditFoodname">
                                <Form.Control type="text" value={this.state.selectedOrderData.foodName} onChange={this.foodNameUpdateHandler} />
                            </Form.Group>
                            <Form.Group controlId="formEditFoodprice">
                                <Form.Control type="text" value={this.state.selectedOrderData.foodPrice} onChange={this.foodPriceUpdateHandler} />
                            </Form.Group>
                            <Form.Group controlId="formEditFoodcategory">
                                <Form.Control type="text" value={this.state.selectedOrderData.foodCategory} onChange={this.foodCategoryUpdateHandler} />
                            </Form.Group>
                            <Form.Group controlId="formEditFooddescription">
                                <Form.Control type="text" value={this.state.selectedOrderData.foodDescription} onChange={this.foodDescriptionUpdateHandler} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="success" onClick={() => this.handleUpdate(this.state.selectedOrderData._id)}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
      </React.Fragment>
    );
    };
  };


