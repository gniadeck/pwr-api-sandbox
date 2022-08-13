 import React from 'react';
 import { Formik, Form, Field, ErrorMessage, connect } from 'formik';
 import { useNavigate } from 'react-router-dom';
 
function TeacherQuery(){ 
    var navigate = useNavigate();

    async function handleSubmit(values) {
        console.log("Event: " + values.name);
       navigate("/zajeciaprowadzacy/", {state:{name:values.name,surname:values.surname,offset:values.offset}});
    }


    return (
   <div>
     <Formik
       initialValues={{ name: 'Jerzy', surname: 'Sas', offset: '-10' }}
       onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        handleSubmit(values);    
       }}
     >
       {({ isSubmitting }) => (
         <Form>
            <label>Imię prowadzącego</label>
           <Field name="name" placeholder="Imię prowadzącego"/>
           <label>Nazwisko prowadzącego</label>
           <Field name="surname" placeholder="Nazwisko prowadzącego" />
           <label>Przesunięcie w czasie (liczone od obecnego tygodnia)</label>
           <Field name="offset" placeholder="Offset" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting}>Submit</button>
         </Form>
       )}
     </Formik>
   </div>
 )};

 
 export default TeacherQuery;