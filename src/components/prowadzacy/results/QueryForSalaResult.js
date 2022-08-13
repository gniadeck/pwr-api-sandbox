import React, { Component } from 'react'
import PrintPlanHelper from './PrintPlanHelper'

export default class QueryForSalaResult extends Component {
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
        fetch("http://68.183.6.223:8080/api/prowadzacy/szukaj/sala?" + new URLSearchParams({
            building: values.building,
            room: values.room
        }))
        .then(response => response.json())
        .then(data => this.setState({result: data}));
    }


    render() {
        let result = this.state.result;
        console.log("Result " + JSON.stringify(result));
        if(!result.hasOwnProperty('errorMessage')){
            return (

                <div><h4>Średnia ocena {result.title}</h4>
                <h2>Plan zajęć:</h2>
                <h5>Pamiętaj, że ten endpoint na ten moment nie obsługuje offsetu, więc będzie
                    wyświetlał jedynie obecne zajęcia.
                </h5>
                <PrintPlanHelper plan={result}/>
                </div>
                
            )
        } else {
            return (
                <div><h1>Nie znaleziono podanej sali.</h1></div>
            )
        }

    }

}