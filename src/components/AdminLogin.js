import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, FormText } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

export default class AdminLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            password: '',
        }
    }
    AdminNameHandler = (e) => {
        this.setState({ name:e.target.value});
    }

    AdminPasswordHandler = (e) => {
        this.setState({ password:e.target.value});
    }

    submitHandlerAdmin = (e) =>{
        e.preventDefault();
        var admin = {
            name: this.state.name,
            password: this.state.password,
            isOnline:true
        }
        console.log(admin);
        axios.post('http://localhost:3024/admin/loginadmin', admin)
        .then((response) => {
            console.log(response.data);
            localStorage.setItem('token', response.data.token)
            //location.href = "/login";rajibsth
        }).catch((err) => {console.log(err)})
    };

    render(){
        return(
            <Container>
                <h2>Admin Sign in</h2>
                <Form onSubmit={this.submitHandlerAdmin}>
                    <FormGroup>
                        <Label for='Username'>Username</Label>
                        <Input type='text' name='name' id='name'
                            value={this.state.name} onChange={this.AdminNameHandler} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input type='password' name='password' id='password'
                            value={this.state.password} onChange={this.AdminPasswordHandler} />
                    </FormGroup>
                    <Button color='primary' onClick={this.login}>Sign In</Button>
                    <FormText>Have not signed up? <Link to='/'> sign up here!</Link></FormText>
                    </Form>
                    </Container>
        )
    }
}