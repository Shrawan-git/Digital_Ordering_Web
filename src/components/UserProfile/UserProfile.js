import React from 'react'
import {
    Card, Button, CardGroup, CardImg, Container, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Carousel, Table, Modal, Form
} from 'react-bootstrap';
import { Route } from 'react-router-dom'
import Header from '../Header/UserHeader'
import Axios from 'axios';
import { Label } from 'reactstrap';
import './UserProfile.css';
import Image from '../images/profile.png';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userprofile: {},
            config: {
                headers: { "Authorization": `Bearer ${localStorage.getItem("usertoken")}` }
            },
            show: false
        }
    }
    componentDidMount() {
        Axios.get(
            "http://localhost:3024/user/me",
            this.state.config
        ).then((response) => {
            this.setState({
                userprofile: response.data
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

    handleOpen = () => {
        this.setState({
            show:true,
    })
    }

    handleUpdate = () => {
        //console.log(this.state.updateId);
        Axios.put(
            `http://localhost:3024/user/UserUpdateAndroid`,
            this.state.userprofile,
            this.state.config
        )
        .then((response) => {
            console.log(response)
            location.href = "/userprofile"
        }).catch((err) => {
            console.log(err)
        })
    }

    fullnameUpdateHandler = (e) => {
        this.setState({userprofile:{...this.state.userprofile,["fullname"]: e.target.value}})
    }

    nameUpdateHandler = (e) => {
        this.setState({userprofile:{...this.state.userprofile,["name"]: e.target.value}})
    }

    emailUpdateHandler = (e) => {
        this.setState({userprofile:{...this.state.userprofile,["email"]: e.target.value}})
    }

    phoneUpdateHandler = (e) => {
        this.setState({userprofile:{...this.state.userprofile,["phone"]: e.target.value}})
    }

    genderUpdateHandler = (e) => {
        this.setState({userprofile:{...this.state.userprofile,["gender"]: e.target.value}})
    }

    render() {
        return (
            <React.Fragment>
                <Route component={Header} />
                <Container >
                    <div className="border">
                    <img className = "image" src={Image} />
                    <h2 className="head">My Profile</h2>  
                                 <Label>Fullname</Label>
                                 <p>{this.state.userprofile.fullname}</p>
                                <Label>Username</Label>
                                <p>{this.state.userprofile.name}</p>
                                <Label>Email</Label>
                                <p>{this.state.userprofile.email}</p>
                                <Label>Phone</Label>
                                <p>{this.state.userprofile.phone}</p>
                                <Label>Gender</Label>
                                <p>{this.state.userprofile.gender}</p>
                                    <p><Button className = "button" onClick={() => this.handleOpen(this.state.userprofile)}><span>Update</span></Button></p>
                                    </div>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Update User</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formEditFullname">
                                    <Form.Control type="text" value={this.state.userprofile.fullname} onChange={this.fullnameUpdateHandler} />
                                </Form.Group>
                                <Form.Group controlId="formEditName">
                                    <Form.Control type="text" value={this.state.userprofile.name} onChange={this.nameUpdateHandler} />
                                </Form.Group>
                                <Form.Group controlId="formEditEmail">
                                    <Form.Control type="text" value={this.state.userprofile.email} onChange={this.emailUpdateHandler} />
                                </Form.Group>
                                <Form.Group controlId="formEditPhone">
                                    <Form.Control type="text" value={this.state.userprofile.phone} onChange={this.phoneUpdateHandler} />
                                </Form.Group>
                                <Form.Group controlId="formEditGender">
                                    <Form.Control type="text" value={this.state.userprofile.gender} onChange={this.genderUpdateHandler} />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.handleClose}>
                                Close
                        </Button>
                            <Button variant="success" onClick={() => this.handleUpdate(this.state.userprofile._id)}>
                                Update
                        </Button>
                        </Modal.Footer>
                        </Modal>
            </Container>
      </React.Fragment>
                );
                };
              };
export default UserProfile;
