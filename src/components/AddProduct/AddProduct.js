import React, { Component } from "react";
import Adminheader from '../Header/AdminHeader';
import { Route } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Form, Table, Modal } from "react-bootstrap";
import Axios from "axios";

export default class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foodName: "",
            foodPrice: "",
            foodCategory: "",
            foodDescription: "",
            image:null,
            config: {
                headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
            }
        }
    }
    foodNameHandler = (e) => {
        this.setState({ foodName: e.target.value })
    }
    foodPriceHandler = (e) => {
        this.setState({ foodPrice: e.target.value })
    }
    foodCategoryHandler = (e) => {
        this.setState({ foodCategory: e.target.value })
    }
    foodDescriptionHandler = (e) => {
        this.setState({ foodDescription: e.target.value })
    }
    handelFileSelect = (e) =>{
        this.setState({
            file: e.target.files[0]
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        let uploaddata = new FormData();
        uploaddata.append('imageFile', this.state.file)
            Axios.post(
                "http://localhost:3024/upload",
                uploaddata,
                this.state.config
            ).then((response) => {
                e.preventDefault();
                console.log(response.data.filename)

        var addProduct = {
            image:response.data.filename,
            foodName: this.state.foodName,
            foodPrice: this.state.foodPrice,
            foodCategory: this.state.foodCategory,
            foodDescription: this.state.foodDescription
        }
        console.log(addProduct);
        Axios.post('http://localhost:3024/order', addProduct, this.state.config)
            .then((response) => {
                console.log(response.data);
                location.href = "/addproduct"
            }).catch((err) => {
                console.log(err)
            });
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <React.Fragment>
                <Route component={Adminheader} />
                <Container>
                    <Row>
                        <Col md="4">
                            <Form onSubmit={this.submitHandler}>
                                <p className="head">Add Product</p>
                                <input label="Foodname" className="textstyle" placeholder="Foodname" type="text" value={this.state.foodName} onChange={this.foodNameHandler} required /><br></br>
                                <input label="Foodprice" placeholder="Foodprice" className="textstyle" type="text" value={this.state.foodPrice} onChange={this.foodPriceHandler} required /><br></br>
                                <p>Choose a Category :</p>
                                <input type="radio" name="pizza" value="pizza" checked={this.state.foodCategory === 'pizza'} onChange={this.foodCategoryHandler} /> pizza<br></br>
                                <input type="radio" name="burger" value="burger" checked={this.state.foodCategory === 'burger'} onChange={this.foodCategoryHandler} /> burger<br></br>
                                <input type="radio" name="salad" value="salad" checked={this.state.foodCategory === 'salad'} onChange={this.foodCategoryHandler} /> salad<br></br>
                                <input type="radio" name="seafood" value="seafood" checked={this.state.foodCategory === 'seafood'} onChange={this.foodCategoryHandler} /> seafood<br></br>
                                <input label="Fooddescription" className="textstyle" placeholder="Fooddescription" type="text" value={this.state.foodDescription} onChange={this.foodDescriptionHandler} required />
                                <input type="file" name="image" onChange={this.handelFileSelect}/><br></br>

                                <Button type="submit" color="primary" onClick={this.addProduct}>Post</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
        }