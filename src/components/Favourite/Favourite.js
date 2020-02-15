import React from 'react'
import {
    Card, Button, CardGroup, Container, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Carousel, Table, Modal, Form
  } from 'react-bootstrap';
import { Route } from 'react-router-dom'
import Header from '../Header/UserHeader'
import Axios from 'axios';

export default class Favourite extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lists: [],
            foodName: "",
            foodPrice: "",
            foodCategory:"",
            foodDescription:"",
            config: {
                headers: {"Authorization": `Bearer ${localStorage.getItem("usertoken")}`}
            },
            show: false,
            selectedData:{}
    }
    }
    componentDidMount(){
        Axios.get(
            "http://localhost:3024/favourite",
            this.state.config
        ).then((response) => {
            this.setState({
                lists: response.data
            });
            console.log(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
          <React.Fragment>
          <Route component = {Header} />
          <Container>
                    <h2 className="maintitle">Food Menu</h2>
                    <Table>
                        <thead>
                            <tr className = "title">
                                <th>Food Name</th>
                                <th>Food Price</th>
                                <th>Food Category</th>
                               
                            </tr>
                        </thead> 
                        <tbody>
                            {
                                this.state.lists.map((list) => {
                                    return (
                                        <tr className="data"key={list._id}>
                                            <td>{list.foodName}</td>
                                            <td>{list.foodPrice}</td>
                                            <td>{list.foodCategory}</td>
                                            <td>{list.foodDescription}</td>
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

