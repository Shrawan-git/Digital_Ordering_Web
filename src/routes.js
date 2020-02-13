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
import UserForm from "./components/UserForm/UserForm";
import OrderForm from "./components/OrderForm/OrderForm";
import UserRoute from "./components/PrivateRoute/UserRoute";
import AdminRoute from "./components/PrivateRoute/AdminRoute";

function Routes(){
    return(
        <>
<Router>
<Switch>
<Route exact path="/" component={Register} />
<Route exact path="/register" component={Register} />
<Route exact path="/login" component={Login} />
<Route exact path="/adminlogin" component={AdminLogin} />
<AdminRoute exact path="/admindashboard" component={AdminDashboard} />
<Route exact path="/userform" component={UserForm} />
<Route exact path="/orderform" component={OrderForm} />
<UserRoute exact path="/userdashboard" component={UserDashboard} />
</Switch>
</Router>
</>
)}

export default Routes;