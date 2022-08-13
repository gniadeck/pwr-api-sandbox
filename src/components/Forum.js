import React, { Component } from 'react'
import Parking from './Parking';
import DisplayForumDetails from './forum/DisplayForumDetails';
import DisplayTopMathTeachers from './forum/DisplayTopMathTeachers';
import LookForTeacher from './forum/LookForTeacher';
import TestForm from './forum/TestForm';

export default class Forum extends Component {
    constructor(props){
        super(props);
        console.log("Lol");
        this.state = {
            forum: {
                "totalTeachers": 1255,
                "totalReviews": 37495,
                "latestRefresh": "2022-07-05 10:26:21"
            },
            bestMathTeachers: []
        }
    }

    componentDidMount() {

        fetch('http://68.183.6.223:8080/api/forum')
        .then(response => response.json())
        .then(data => this.setState({forum: data}))

        fetch('http://68.183.6.223:8080/api/forum/prowadzacy/Matematycy/ranking/najlepsi?limit=10')
        .then(response => response.json())
        .then(data => this.setState({bestMathTeachers: data}))

    }


    render() {
        console.log(this.state.forum);
        // console.log(this.state.data);
        return (
            <div><div class = "container">
                
              <DisplayForumDetails p={this.state.forum}/>
              <TestForm />
              <h1>Top 10 matematyków:</h1>
              <p>Endpoint: api/forum/prowadzacy/Matematycy/ranking/najlepsi?limit=10</p>
              {/* <div class="container"> */}
              </div>
              <div class="row container">
              {this.state.bestMathTeachers.map((teacher, index) => 
              <DisplayTopMathTeachers p={teacher} index={index}/>)}
              </div>
            </div>
            
        )
    }

}