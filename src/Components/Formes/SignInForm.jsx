import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SIGN_IN_SCHEMA} from "./../../Utilities/SCHEMES";
import styles from "./SignIn.module.scss";
import {  Link} from "react-router-dom";



const SignInForm = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values, formikBag) => {
    console.log(values);
  };

  return (
    <div>
      <Link to="/SignUpForm">SignUpForm</Link> 
      <h2 className={styles.signInTittle}>CREATE AN ACCOUNT</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SIGN_IN_SCHEMA}
      >
        {(formProps) => {
          return (
            <Form>
              <Field type="text" name="email" />
              <ErrorMessage component="span" name="email" />
              <Field type="password" name="password" />
              <ErrorMessage component="span" name="password" />
              <Field type="submit" value="Submit" />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignInForm;
