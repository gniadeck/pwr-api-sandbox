 import React from 'react';
 import { Formik, Form, Field, ErrorMessage, connect } from 'formik';
 import { useNavigate } from 'react-router-dom';
 
function SalaQuery(){ 
    var navigate = useNavigate();

    async function handleSubmit(values) {
        console.log("Event: " + values.name);
       navigate("/zajeciasala/", {state:{building:values.building,room:values.room}});
    }


    return (
   <div>
     <Formik
       initialValues={{ building: 'D-1', room: '311d' }}
       onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        handleSubmit(values);    
       }}
     >
       {({ isSubmitting }) => (
         <Form>
            <label>Number budynku</label>
           <Field name="building" placeholder="Imię prowadzącego"/>
           <label>Sala</label>
           <Field name="room" placeholder="Nazwisko prowadzącego" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting}>Submit</button>
         </Form>
       )}
     </Formik>
   </div>
 )};

 
 export default SalaQuery;