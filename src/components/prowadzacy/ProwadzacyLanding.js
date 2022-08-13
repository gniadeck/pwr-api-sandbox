import React, {Component} from 'react'
import { Formik, Form, Field, ErrorMessage, connect } from 'formik';
import TeacherQuery from './forms/TeacherQuery'
import SalaQuery from './forms/SalaQuery';

export default class Contacts extends Component {
    constructor(props){
        super(props);
        this.state = {
            parking: []
        }
    }
    

    render(){
        return (
            
            <div className='container'>
                <h1>Prowadzący</h1>
                <h5>Prowadzący API to moduł pozwalający korzystać ze strony prowadzacy.wit.pwr.edu.pl, gdzie można
                    sprawdzać plany zajęć prowadzących, plany zajęć przypisane do konkretnych zajęć, a także zajęć w konkretnej sali.
                    Wspierany jest parametr offset, który pokazuje plany w zależności od konkretnego tygodnia. Jednak z naszych eksperymentów
                    prowadzonych podczas implementacji endpointów wynika, że jest on użyteczny jedynie dla wyszukiwania prowadzących.
                </h5>
                <br></br>
                <h6>Wyszukaj plan zajęć prowadzącego</h6>
                <TeacherQuery/>
                <br></br>
                <h6>Wyszukaj plan zajęć w sali</h6>
                <SalaQuery/>
            </div>
        )
    }
}