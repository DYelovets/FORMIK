import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Link} from "react-router-dom";
import {NAME_SCHEMA, SIGN_UP_SCHEMA } from './../../Utilities/SCHEMES';
import styles from './SignIn.module.scss';


const SignUpForm=(props)=>{
const initialValues={
  firstName:'',
  lastName:'',
  displayName:'',
  email:'',
  password:'',
  confirmPassword:'',
};

const onSubmit=(values, formikBag)=>{
   console.log(values); 
}

 return(
    <div className={styles.wrapper}>
      <Link to="/SignInForm">SignUpForm</Link>
     <h2 classname={styles.signInTittle}>CREATE AN ACCOUNT</h2>
     <h4>We always keep your name and email address private.</h4>
    <Formik
     initialValues={initialValues}
     onSubmit={onSubmit}
     validationSchema={SIGN_UP_SCHEMA}
    
      >
      
         
         { formProps=>{
             return(
   <Form>
     <Field type='text' name='firstName'/>
     <ErrorMessage component='span' name='name'/>

     <Field type='text' name='lastName'/>
     <ErrorMessage component='span' name='lastName'/>

     <Field type='text' name='displayName'/>
     <ErrorMessage component='span' name='displayName'/>

     
     <Field type='text' name='email'/>
     <ErrorMessage component='span' name='email'/>
     
     <Field type='password' name='password'/>
     <ErrorMessage component='span' name='password'/>

     <Field type='password' name='password'/>
     <ErrorMessage component='span' name='confirmPassword'/>

     <Field type='submit' value='Submit' disabled={!formProps.isValid}/>
    </Form>
   )
    }
   }
   </Formik>
   </div>
 )
 }

export default SignUpForm;
