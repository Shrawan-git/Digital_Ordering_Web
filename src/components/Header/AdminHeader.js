import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Navbar,
    Nav,
    Row,
    Col,
    Container,
    Alert,
    Button,
    Form,
    FormControl
} from "react-bootstrap"
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom"

export default class AdminHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Digital Order</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Users</Nav.Link>
                            <Nav.Link as={Link} to="/">Orders</Nav.Link>
                            <Nav.Link as={Link} to="/">Ratings</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <div>
                </div>
                </div>
        )
    }
 
      
}
