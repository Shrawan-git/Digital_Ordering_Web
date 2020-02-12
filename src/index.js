import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Routes from "./routes";
// import {
//     BrowserRouter as Router,
//     Link,
//     Switch,
//     Route
// } from "react-router-dom"

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//     }
    

//     Header = () => {
//         return (
//             <div>
//                 <Navbar bg="light" expand="lg">
//                     <Navbar.Brand href="#home">Digital Order</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav className="mr-auto">
//                             <Nav.Link as={Link} to="/adminlogin">AdminLogin</Nav.Link>
//                             <Nav.Link as={Link} to="/login">Login</Nav.Link>
//                             <Nav.Link as={Link} to="/register">Registration</Nav.Link>
//                         </Nav>
//                         <Form inline>
//                             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//                             <Button variant="outline-success">Search</Button>
//                         </Form>
//                     </Navbar.Collapse>
//                 </Navbar>

//                 <div>
                  
//                 </div>
//                 </div>
//         )
//     }
//     render() {
//         return (
//             <Router>
//                 <this.Header />
//                 <this.Footer />
//             </Router>
//         )
//     }
// }
ReactDOM.render(<Routes />, document.getElementById('root'));
