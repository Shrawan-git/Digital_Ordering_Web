import React, {Component} from 'react'
import Notifications from "./Notifications";
import List from '../Project/List'


class AdminDashboard extends Component {
    render(){
        return (
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
        )
    }
}
export default AdminDashboard