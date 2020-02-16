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
import FeedbackForm from './components/Feedback/Feedback';
import UserRoute from "./components/PrivateRoute/UserRoute";
import AdminRoute from "./components/PrivateRoute/AdminRoute";
import UserProfile from "./components/UserProfile/UserProfile";
import UserOrder from "./components/UserOrder/UserOrder";
import OrderList from "./components/OrderList/OrderList";
import Favourite from "./components/Favourite/Favourite";
import AddProduct from "./components/AddProduct/AddProduct";

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
<AdminRoute exact path="/userform" component={UserForm} />
<AdminRoute exact path="/orderform" component={OrderForm} />
<AdminRoute exact path="/feedbackform" component={FeedbackForm} />
<AdminRoute exact path="/orderlist" component={OrderList} />
<AdminRoute exact path="/addproduct" component={AddProduct} />

<UserRoute exact path="/userprofile" component={UserProfile} />
<UserRoute exact path="/userorder" component={UserOrder} />
<UserRoute exact path="/userdashboard" component={UserDashboard} />
<UserRoute exact path="/favourite" component={Favourite} />
</Switch>
</Router>
</>
)}

export default Routes;