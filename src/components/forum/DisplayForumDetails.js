import React from 'react';

const DisplayForumDetails = ({p}) => (
    <div class="row">
        <h5><b>Forum to jedna z najciekawszych funkcji PWr-API. Pozwala ona uzyskać dostęp do wewnątrzpolitechnicznego forum, bez konieczności
            posiadania konta.</b></h5>
            <p>Endpoint: api/forum</p>
    <h6>Liczba nauczycieli w bazie: {p.totalTeachers}</h6>
    <h6>Liczba opinii w bazie: {p.totalReviews}</h6>
    <h6>Data ostatniej aktualizacji: {p.latestRefresh}</h6>

    </div>
)
export default DisplayForumDetails;