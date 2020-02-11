import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, FormText } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

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
            gender:'',
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
            fullname:this.state.fullname,
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            password:this.state.password,
            cpassword:this.state.cpassword,
            gender:this.state.gender,
            isRegistered: true
        }
        console.log(dataUser);
        axios.post('http://localhost:3024/user/signup', dataUser)
        .then((response) => {
            console.log(response.data);
            localStorage.setItem('token', response.data.token)
            //location.href = "/login";
        }).catch((err) => {console.log(err)})
    };
    render() {
        return (
            <Container>
                <h2>Sign Up</h2>
                <Form onSubmit={this.submitHandlerUser}>
                    <FormGroup>
                        <Label for='fullname'>Full Name</Label>
                        <Input type='text' name='fullname' id='fullname'
                            value={this.state.fullname} onChange={this.userFullNameHandler} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='name'>User Name</Label>
                        <Input type='text' name='name' id='name'
                            value={this.state.name} onChange={this.userUsernameHandler} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input type='text' name='email' id='email'
                            value={this.state.email} onChange={this.userEmailHandler} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='phone'>Phone</Label>
                        <Input type='text' name='phone' id='phone'
                            value={this.state.phone} onChange={this.userPhoneHandler} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input type='password' name='password' id='password'
                            value={this.state.password} onChange={this.userPasswordHandler} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='Confirm password'>Confirm Password</Label>
                        <Input type='cpassword' name='cpassword' id='cpassword'
                            value={this.state.cpassword} onChange={this.userCPasswordHandler} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='gender'>Gender</Label>
                        <Input type='text' name='gender' id='gender'
                            value={this.state.gender} onChange={this.userGenderHandler} />
                    </FormGroup>
                    <Button color='primary' onClick={this.register}>Sign Up</Button>
                    <FormText>Already a user? <Link to='/'> Login here!</Link></FormText>
                </Form>
            </Container>
        )
    }
}
