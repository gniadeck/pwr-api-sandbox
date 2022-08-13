import React from 'react';

function PrintPlanHelper(plan) {
    if(JSON.stringify(plan) == "{\"plan\":{}}"){
        return (
            <div>
                <h1>Ładowanie...</h1>
            </div>
        )
    }
    plan = plan.plan;
    return (
    <div>
    <h4><b>Poniedziałek</b></h4>
    <PrintDay day={plan.pn}/>
    <h4><b>Wtorek</b></h4>
    <PrintDay day={plan.wt}/>
    <h4><b>Środa</b></h4>
    <PrintDay day={plan.sr}/>
    <h4><b>Czwartek</b></h4>
    <PrintDay day={plan.czw}/>
    <h4><b>Piątek</b></h4>
    <PrintDay day={plan.pt}/>
    <h4><b>Sobota</b></h4>
    <PrintDay day={plan.sb}/>
    <h4><b>Niedziela</b></h4>
    <PrintDay day={plan.nd}/>
  </div>

)}

export function PrintDay(day){
    if(day.day.lessons != null && day.day.lessons.length != 0){
    return (
        <div class='row'>
         {day.day.lessons.map((lesson) => <PrintLesson lesson={lesson}/>)}
        </div>
    )} else {
        return (
            <div>
                <h3>BRAK ZAJĘĆ</h3>
            </div>
        )
    }
}

export function PrintLesson(lesson){

    return (
        <div class='col s4'>
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">{lesson.lesson.title}</span>
                <p>Czas zajęć: {lesson.lesson.time}</p>
            <p>Nazwa: {lesson.lesson.title}</p>
            <p>Lokalizacja: {lesson.lesson.location}</p>
            <p>Nauczyciel: {lesson.lesson.teacher}</p>
              </div>
            </div>
            </div>
    )

}

export default PrintPlanHelper;