import React, {Component} from 'react';
import { useNavigate } from "react-router-dom"; 
import TeacherQueryResult from './results/TeacherQueryResult';


export default class ZajeciaProwadzacyResult extends Component{

    constructor(props){
        super(props);
        console.log("Lol");
        console.log(this.props);
        this.state = {
            result: {}
        }
    }
    
    render(){
        return (
            <div class="row">
                <h2></h2>
                <TeacherQueryResult/>
          </div> 
        )
    }


}