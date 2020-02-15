import React from 'react'
import {
    Card, Button, CardGroup, Container, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Carousel, Table, Modal, Form
  } from 'react-bootstrap';
import { Route } from 'react-router-dom'
import Header from '../Header/UserHeader'
import Axios from 'axios';
import './UserOrder.css';

export default class UserOrder extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lists: [],
            foodName: "",
            foodPrice: "",
            foodCategory:"",
            foodDescription:"",
            config: {
                headers: {"Authorization": `Bearer ${localStorage.getItem("usertoken")}`}
            },
            show: false,
            selectedData:{}
    }
    }
    componentDidMount(){
        Axios.get(
            "http://localhost:3024/order",
            this.state.config
        ).then((response) => {
            this.setState({
                lists: response.data
            });
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    handleOpen = (productid) => {
        this.setState({
            show: true,
            selectedData: this.state.lists.find((list) => {
                return list._id === productid
            })
        })
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    handleOrder = (productorder) => {
        console.log(this.state.lists)
        Axios.post(
            "http://localhost:3024/userorder",
            this.state.selectedData,
            this.state.config

        ).then((response) => {
            console.log(response.data);
            location.href = "/userorder"
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
          <React.Fragment>
          <Route component = {Header} />
          <Container>
                    <h2 className="maintitle">Food Menu</h2>
                    <Table>
                        <thead>
                            <tr className = "title">
                                <th>Food Name</th>
                                <th>Food Price</th>
                                <th>Food Category</th>
                                <th>Food Description</th>
                                <th>Order Food</th>
                            </tr>
                        </thead> 
                        <tbody>
                            {
                                this.state.lists.map((list) => {
                                    return (
                                        <tr className="data"key={list._id}>
                                            <td>{list.foodName}</td>
                                            <td>{list.foodPrice}</td>
                                            <td>{list.foodCategory}</td>
                                            <td>{list.foodDescription}</td>
                                            <td><Button className="orderbutton"onClick={() => this.handleOpen(list._id)}>Order</Button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm Order</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Control type="text" defaultValue={this.state.selectedData.foodName} /><br></br>
                                <Form.Control type="text" defaultValue={this.state.selectedData.foodPrice} /><br></br>
                                <Form.Control type="text" defaultValue={this.state.selectedData.foodCategory} /><br></br>
                                <Form.Control type="text" defaultValue={this.state.selectedData.foodDescription} />
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Cancel</Button>
                            <Button variant="success" onClick={() => this.handleOrder(this.state.selectedData._id)}>Order</Button>
                            {/* <Button variant="success" onClick={() => this.cartHandler(this.state.selectedData._id)}>Add to Favourite</Button> */}
                        </Modal.Footer>
                    </Modal>         
            </Container>
      </React.Fragment>
    );
    };
  };

