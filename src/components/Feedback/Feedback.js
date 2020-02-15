import React from 'react'
import {
    Card, Button, CardGroup, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Carousel, Table
  } from 'react-bootstrap';
import { Route } from 'react-router-dom'
import Header from '../Header/AdminHeader'
import { Container } from 'reactstrap'
import Axios from 'axios';

class FeedbackForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            feedbacks: [],
            config: {
                headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
            },
            selectedUsersData:{}
    }
    }
    componentDidMount(){
        Axios.get(
            "http://localhost:3024/rating",
            this.state.config
        ).then((response) => {
            this.setState({
                feedbacks: response.data
            });
            console.log(response.data)

        }).catch((err) => {
            console.log(err)
        })
    }

    handleDelete = (feedbackId) => {
        const filteredOrder = this.state.feedbacks.filter((feedback)=> {
            return feedback._id !== feedbackId
        })
        this.setState({
            feedbacks: filteredOrder
        })
        console.log(feedbackId.rate);
        Axios.delete(
            `http://localhost:3024/rating/${feedbackId}`,
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
                <h2 className="maintitle">Feedback Details</h2>
                <Table>
                    <thead>
                        <tr className="title">
                            <th>Rate</th>
                            <th>Feedback</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead> 
                    <tbody>
                        {
                            this.state.feedbacks.map((feedback) => {
                                return (
                                    <tr className="data" key={feedback._id}>
                                        <td>{feedback.rate}</td>
                                        <td>{feedback.feedback}</td>
                                        <td><Button className="orderbutton" onClick={() => this.handleDelete(feedback._id)}>Delete</Button></td>
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

  export default FeedbackForm;
