import React from 'react'
import {
    Card, Button, CardGroup, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Carousel, Table
  } from 'react-bootstrap';
import { Route } from 'react-router-dom'
import Header from '../Header/AdminHeader'
import { Container } from 'reactstrap'
import Axios from 'axios';

class UserForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            config: {
                headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
            },
            selectedUsersData:{}
    }
   
    }

    componentDidMount(){
        Axios.get(
            "http://localhost:3024/admin/userlist",
            this.state.config
        ).then((response) => {
            this.setState({
                users: response.data
            });
            console.log(response.data)

        }).catch((err) => {
            console.log(err)
        })
    }

    handleDelete = (userId) => {
        const filteredUser = this.state.users.filter((user)=> {
            return user._id !== userId
        })
        this.setState({
            users: filteredUser
        })
        console.log(userId.fullname);
        Axios.delete(
            `http://localhost:3024/admin/${userId}`,
            this.state.config
        ).then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
    return (
      <React.Fragment>
      <Route component = {Header} />
      <Container>
                <h2>User details</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>Fullname</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead> 
                    <tbody>
                        {
                            this.state.users.map((user) => {
                                return (
                                    <tr key={user._id}>
                                        <td>{user.fullname}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.gender}</td>
                                        <td><Button onClick={() => this.handleDelete(user._id)}>Delete</Button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
      </React.Fragment>
    );
    };
  };

  export default UserForm;