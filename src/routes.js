import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom"
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";

function Routes(){
    return(
        <>
        <Router>
<Switch>
<Route exact path="/" component={Register} />
<Route exact path="/register" component={Register} />
<Route exact path="/login" component={Login} />
<Route exact path="/adminlogin" component={AdminLogin} />
<Route exact path="/admindashboard" component={AdminDashboard} />
<Route exact path="/userdashboard" component={UserDashboard} />
</Switch>
</Router>
</>
)}

export default Routes;