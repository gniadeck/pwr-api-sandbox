import React from 'react';

const DisplayTopMathTeachers = ({p, index}) => (
    <div>
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{index+1}. {p.academicTitle} {p.fullName}, ocena {p.average}</span>
          <h6>{p.reviews[0].reviewer} pisze o kursie {p.reviews[0].courseName}</h6>
    <h6>Ocena: {p.reviews[0].givenRating}, "{p.reviews[0].title}"</h6>
    <blackquote>{p.reviews[0].review}</blackquote>
        </div>
      </div>
    </div>
  </div>

)
export default DisplayTopMathTeachers;