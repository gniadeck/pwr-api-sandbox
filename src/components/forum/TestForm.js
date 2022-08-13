 // Render Prop
 import React from 'react';
 import { Formik, Form, Field, ErrorMessage, connect } from 'formik';
 import { useNavigate } from 'react-router-dom';
 
function TestForm(){ 
    var navigate = useNavigate();

    async function handleSubmit(values) {
       navigate("/opinieNauczyciel/", {state:{name:values.name,surname:values.surname}});
    }


    return (
   <div>
     <h1>Wyszukaj opinie o prowadzącym</h1>
     <Formik
       initialValues={{ name: 'Adam', surname: 'Abrams' }}
       onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        handleSubmit(values);    
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field name="name" placeholder="Imię prowadzącego"/>
           <Field name="surname" placeholder="Nazwisko prowadzącego" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting}>Submit</button>
         </Form>
       )}
     </Formik>
   </div>
 )};
 
 export default TestForm;