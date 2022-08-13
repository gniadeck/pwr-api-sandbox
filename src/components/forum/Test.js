import React, { useEffect, useLayoutEffect } from 'react';
import TestForm from './TestForm';
import { useLocation } from "react-router-dom"; 
import QueryForTeacherProfile from './search/QueryForTeacherProfile';

let values;
let result = {};


function Test(){
    values = useLocation();
    console.log(values);
    return (
        <div class='container'>
            <h2>Wyszukałeś opinie dla nauczyciela {values.state.name} {values.state.surname}</h2>
            <QueryForTeacherProfile values={values.state}/>
        </div>
    )
    
}
export default Test;