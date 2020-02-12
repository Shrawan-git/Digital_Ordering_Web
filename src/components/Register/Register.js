import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, FormText } from 'reactstrap'
import { Link, Redirect, Route } from 'react-router-dom'
import axios from 'axios'
import Header from "../Header/Header"

export default class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fullname: '',
            name: '',
            email: '',
            phone: '',
            password: '',
            cpassword: '',
            gender: '',
            isRegistered: false
        }
    }

    userFullNameHandler = (e) => {
        this.setState({ fullname: e.target.value });
    }

    userUsernameHandler = (e) => {
        this.setState({ name: e.target.value });
    }

    userEmailHandler = (e) => {
        this.setState({ email: e.target.value });
    }

    userPhoneHandler = (e) => {
        this.setState({ phone: e.target.value });
    }

    userPasswordHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    userCPasswordHandler = (e) => {
        this.setState({ cpassword: e.target.value });
    }

    userGenderHandler = (e) => {
        this.setState({ gender: e.target.value });
    }

    //submitHandler for user

    submitHandlerUser = (e) => {
        e.preventDefault();
        var dataUser = {
            fullname: this.state.fullname,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            cpassword: this.state.cpassword,
            gender: this.state.gender,
            isRegistered: true
        }
        console.log(dataUser);
        axios.post('http://localhost:3024/user/signup', dataUser)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('token', response.data.token)
                //location.href = "/login";
            }).catch((err) => { console.log(err) })
    };
    render() {
        return (
            <React.Fragment>
                <Route component = {Header} />
                <Container>
                <h2>Sign Up</h2>
                <Form onSubmit={this.submitHandlerUser}>
                    <FormGroup>
                        <Label for='fullname'>Full Name</Label>
                        <Input type='text' name='fullname' id='fullname'
                            value={this.state.fullname} onChange={this.userFullNameHandler} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='name'>User Name</Label>
                        <Input type='text' name='name' id='name'
                            value={this.state.name} onChange={this.userUsernameHandler} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input type='text' name='email' id='email'
                            value={this.state.email} onChange={this.userEmailHandler} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='phone'>Phone</Label>
                        <Input type='text' name='phone' id='phone'
                            value={this.state.phone} onChange={this.userPhoneHandler} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='gender'>Gender</Label>
                        <br></br>
                        <input type='radio' name='gender' 
                            value="Male" checked={this.state.gender === "Male"} onChange={this.userGenderHandler} /> Male <br></br>

                        <input type='radio' name='gender'
                            value="Female" checked={this.state.gender === "Female"} onChange={this.userGenderHandler} /> Female
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input type='password' name='password' id='password'
                            value={this.state.password} onChange={this.userPasswordHandler} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for='Confirm password'>Confirm Password</Label>
                        <Input type='cpassword' name='cpassword' id='cpassword'
                            value={this.state.cpassword} onChange={this.userCPasswordHandler} required/>
                    </FormGroup>
                    <Button color='primary' onClick={this.register}>Sign Up</Button>
                    <FormText>Already a user? <Link to='/'> Login here!</Link></FormText>
                </Form>
            </Container>
            </React.Fragment>
            
        )
    }
}
