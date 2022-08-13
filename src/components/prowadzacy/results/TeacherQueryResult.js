import React, { useEffect, useLayoutEffect } from 'react';
import { useLocation } from "react-router-dom"; 
import QueryForTeacherResult from "./QueryForTeacherResult"

let values;


function TeacherQueryResult(){
    values = useLocation();
    return (
        <div class='container'>
            <h2>Wyszukałeś plan zajęć dla nauczyciela {values.state.name} {values.state.surname}, offset {values.state.offset}</h2>
            <p>Endpoint: api/prowadzacy/szukaj?</p>
            <QueryForTeacherResult values={values}/>
        </div>
    )
    
}
export default TeacherQueryResult;