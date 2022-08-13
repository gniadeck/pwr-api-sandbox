import React from 'react';



const DisplaySingleReview = ({review}) => (
    <div>
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <h6>{review.reviewer} pisze o kursie {review.courseName}</h6>
    <h6>Ocena: {review.givenRating}, "{review.title}"</h6>
    <blackquote>{review.review}</blackquote>
        </div>
      </div>
    </div>
  </div>

)
export default DisplaySingleReview;