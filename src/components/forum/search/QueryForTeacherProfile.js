import React, { Component } from 'react'
import DisplaySingleReview from './DiplaySingleReview'

export default class QueryForTeacherProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            result: {},
            reviews: []
        }
    }

    componentDidMount() {
        console.log(this.props.values)

    fetch("http://68.183.6.223:8080/api/forum/prowadzacy/szukajImie?" + new URLSearchParams({
            firstName: this.props.values.name,
            lastName: this.props.values.surname,
            limit: "10"
        }))
        .then(response => response.json())
        .then(data => this.setState({result: data, reviews: data.reviews}));
    }


    render() {
        let result = this.state.result;
        // console.log(this.state.data)

        if(result == null || result == []){
            return (
                <div><h1>Ładowanie...</h1></div>
            )
        }

        if(!result.hasOwnProperty('errorMessage')){
            return (
                
                <div>
                    <p>Endpoint: api/forum/prowadzacy/szukajImie?</p>
                    <h4>Średnia ocena {result.average}</h4>
                  {this.state.reviews.map((review) => 
                  <DisplaySingleReview review={review}/>)}
                
                </div>
            )
        } else {
            return (
                <div><h1>Nie znaleziono podanego nauczyciela.</h1></div>
            )
        }

    }

}