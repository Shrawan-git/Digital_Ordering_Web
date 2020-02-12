import React, {Component} from 'react'
import Notifications from "./Notifications";
import List from '../Project/List'
import { Route } from 'react-router-dom'
import Header from '../Header/UserHeader'

class UserDashboard extends Component {
    render(){
        return (
            <React.Fragment>
            <Route component = {Header} />
            <div className = "dashboard container">
                <div className = "row">
                    <div className = "col s12 m6">
                        <List />
                       <div className="div.col.s12.m5.offset-m1">
                        <Notifications />
                       </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
export default UserDashboard