import React, { useEffect, useLayoutEffect } from 'react';
import { useLocation } from "react-router-dom"; 
import QueryForTeacherResult from "./QueryForTeacherResult"
import QueryForSalaResult from './QueryForSalaResult'

let values;

function SalaQueryResult(){
    values = useLocation();
    return (
        <div class='container'>
            <h2>Wyszukałeś plan zajęć dla sali {values.state.building} {values.state.room}</h2>
            <p>Endpoint: api/prowadzacy/szukaj/sala?</p>
            <QueryForSalaResult values={values.state}/>
        </div>
    )
    
}
export default SalaQueryResult;