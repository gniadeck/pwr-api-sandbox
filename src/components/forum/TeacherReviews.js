import React, {Component} from 'react';
import { useNavigate } from "react-router-dom"; 
import Test from './Test';



export default class TeacherReviews extends Component{

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
                <Test/>
          </div> 
        )
    }


}