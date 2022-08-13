import React from 'react';

const Parking = ({p}) => (
    <tr>
        <th>{p.name}</th>
        <th>{p.lastUpdate}</th>
        <th>{p.leftPlaces}</th>
        <th>{p.trend}</th>
    </tr>
    // <h3>Nazwa: {p.name} , Ostatnia aktualizacja: {p.lastupdate}, Pozostałe miejsca: {p.leftPlaces}, Trend: {p.trend}</h3>
)
export default Parking;