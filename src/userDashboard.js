import React from 'react';
import ReactDOM from 'react-dom';
import UserDashboard from "./components/UserDashboard/UserDashboard";

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

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    Footer = () => {
        return (
            <div>
                <Row>
                    <Col sm={6}>
                        Contact us:
                        phone:
                        email:
                    </Col>
                    <Col sm={4}>
                        Copyright
                    </Col>
                    <Col sm={4}>
                    </Col>
                </Row>
            </div>
        )
    }

    Header = () => {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Digital Order</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">View products</Nav.Link>
                            <Nav.Link as={Link} to="/">Order List</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

                <div>
                    <Switch>
                        <Route exact path="/userdashboard" component={UserDashboard} />
                    </Switch>
                </div>
                </div>
        )
    }
    render() {
        return (
            <Router>
                <this.Header />
                <this.Footer />
            </Router>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));