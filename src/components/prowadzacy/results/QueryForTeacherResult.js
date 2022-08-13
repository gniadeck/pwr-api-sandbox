import React, { Component } from 'react'
import PrintPlanHelper from './PrintPlanHelper'

export default class QueryForTeacherResult extends Component {
    constructor(props){
        super(props);
        this.state = {
            result: {},
        }
    }
    


    componentDidMount() {
         let values = this.state.result;
        console.log(this.props.values)
        values = this.props.values;
        fetch("http://68.183.6.223:8080/api/prowadzacy/szukaj?" + new URLSearchParams({
            query: values.state.name + " " + values.state.surname,
            offset: values.state.offset
        }))
        .then(response => response.json())
        .then(data => this.setState({result: data}));
    }


    render() {
        let result = this.state.result;
        console.log("Result " + JSON.stringify(result));
        if(!result.hasOwnProperty('errorMessage')){
            return (
                <div>
                <PrintPlanHelper plan={result}/>
                </div>
                
            )
        } else {
            return (
                <div><h1>Nie znaleziono podanego nauczyciela.</h1></div>
            )
        }

    }

    async getData(){
        let values = this.state.result;
        return fetch("http://68.183.6.223:8080/api/prowadzacy/szukaj?" + new URLSearchParams({
            query: values.state.name + " " + values.state.surname,
            offset: -10
        }))
        .then(response => response.json())
        .then(data => this.setState({result: data}));
    }

}