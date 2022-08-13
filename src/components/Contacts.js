import React, { Component } from 'react'
import Parking from './Parking';

export default class Contacts extends Component {
    constructor(props){
        super(props);
        this.state = {
            parking: []
        }
    }

    componentDidMount() {
        fetch('http://68.183.6.223:8080/api/parking')
        .then(response => response.json())
        .then(data => this.setState({parking: data}))
    }


    render() {
        console.log(this.state.parking);
        // console.log(this.state.data);
        return (
            <div class='container'>
                <p>Endpoint: api/parking</p>
                  <table>
        <thead>
            <tr>
                <th>Nazwa</th>
                <th>Ostatnia aktualizacja</th>
                <th>Pozostałe miejsca</th>
                <th>Trend</th>
            </tr>
        </thead>
                {this.state.parking.map((item) => (
                    <Parking p={item} />
                ))}
                    </table>
            </div>
            
        )
    }

}