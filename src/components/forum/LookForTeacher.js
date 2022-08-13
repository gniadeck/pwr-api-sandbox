import React, {Component} from 'react';
import { useNavigate } from "react-router-dom"; 

export default class LookForTeacher extends Component{


    submitTeacherQuery(event){
        event.preventDefault();
        
        let teacherQuery = {
            first_name: this.refs.first_name,
            last_name: this.refs.last_name
        }

        fetch("http://68.183.6.223:8080/api/forum/prowadzacy/szukajImie?" + new URLSearchParams({
            firstName: teacherQuery.first_name,
            lastName: teacherQuery.last_name,
            limit: "3"
        }))
        .then(response => response.json);

    }

    
    render(){
        return (
            <div class="row">
            <form class="col s12" onSubmit={this.submitTeacherQuery.bind(this)}>
              <div class="row">
                <div class="input-field col s6">
                  <input placeholder="Placeholder" ref="first_name" type="text" class="validate"/>
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div class="input-field col s6">
                  <input ref="last_name" type="text" class="validate"/>
                  <label htmlFor="last_name">Last Name</label>
                </div>
              </div>
              <div class="row">
                    <button className='waves-effect waves-light btn' type='submit' name='action'>Prześlij</button>
              </div>
            </form>
          </div> 
        )
    }


}