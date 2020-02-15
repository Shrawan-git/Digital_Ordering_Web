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
            showAddModal: false, 
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
        e.preventDefault();
        var addFood = {
            foodName: this.state.foodName,
            foodPrice: this.state.foodPrice,
            foodCategory: this.state.foodCategory,
            foodDescription: this.state.foodDescription
        }
        Axios.post(
            "http://localhost:3024/order",
            addFood,
            this.state.config
        ).then((response) => {
            console.log(response.data);
            location.href = "/orderform"
        }).catch((err) => {
            console.log(err)
        })
    }

    handleClose = () => {
        this.setState({
            show: false,
            showAddModal:false
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

    handleAddFood = () => {
        this.setState({
            showAddModal: true
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

    foodNameHandler = (e) => {
        this.setState({foodName: e.target.value})
    }

    foodPriceHandler = (e) => {
        this.setState({foodPrice: e.target.value})
    }
    foodCategoryHandler = (e) => {
        this.setState({foodCategory: e.target.value})
    }
    foodDescriptionHandler = (e) => {
        this.setState({foodDescription: e.target.value})
    }

    render() {
    return (
      <React.Fragment>
      <Route component = {Header} />
      <Container>
                <h2 className="maintitle">Order Details</h2>
                <Table>
                    <thead>
                        <tr className="title">
                            <th>FoodName</th>
                            <th>FoodPrice</th>
                            <th>FoodCategory</th>
                            <th>FoodDescription</th>
                            <th>Delete</th>
                            <th>Update</th>
                            <th><Button onClick={this.handleAddFood}>Add</Button></th>
                        </tr>
                    </thead> 
                    <tbody>
                        {
                            this.state.orders.map((order) => {
                                return (
                                    <tr className="data" key={order._id}>
                                        <td>{order.foodName}</td>
                                        <td>{order.foodPrice}</td>
                                        <td>{order.foodCategory}</td>
                                        <td>{order.foodDescription}</td>
                                        <td><Button className="orderbutton" onClick={() => this.handleDelete(order._id)}>Delete</Button></td>
                                        <td><Button className="orderbutton" onClick={() => this.handleOpen(order._id)}>update</Button></td>
                                        <td></td>
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

                    //for adding food
                </Modal>
                <Modal show={this.state.showAddModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Food</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formFoodname">
                                <Form.Control type="text" placeholder="Food name" value={this.state.foodName} onChange={this.foodNameHandler} />
                            </Form.Group>
                            <Form.Group controlId="formFoodprice">
                                <Form.Control type="text" placeholder="Food price" value={this.state.foodPrice} onChange={this.foodPriceHandler} />
                            </Form.Group>
                            <Form.Group controlId="formFoodcategory">
                                <Form.Control type="text" placeholder="Food category" value={this.state.foodCategory} onChange={this.foodCategoryHandler} />
                            </Form.Group>
                            <Form.Group controlId="formFooddescription">
                                <Form.Control type="text" placeholder="Food description" value={this.state.foodDescription} onChange={this.foodDescriptionHandler} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="success" onClick={this.handleAdd}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
      </React.Fragment>
    );
    };
  };


