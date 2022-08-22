import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./style.css";
import Axios from "axios";

function Register() {
  const handleClickRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
    });
  };

  const validationRegister = yup.object().shape({
    name: yup.string().required("*Required Field"),
    email: yup.string().email("Invalid E-mail").required("*Required Field"),
    password: yup
      .string()
      .min(6, "*Required 6 characters")
      .required("*Required Field"),
    confirmPassword: yup
      .string()
      .required("*Required Field")
      .oneOf([yup.ref("password"), null], "Invalid Password"),
  });

  return (
    <div>
      {" "}
      <h1 className="title">Register</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleClickRegister}
        validationSchema={validationRegister}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field
              className="form-field"
              name="name"
              placeHolder="name"
            ></Field>

            <ErrorMessage
              className="form-error"
              component="span"
              name="name"
            ></ErrorMessage>
          </div>
          <div className="login-form-group">
            <Field
              className="form-field"
              name="email"
              placeHolder="e-mail"
            ></Field>

            <ErrorMessage
              className="form-error"
              component="span"
              name="email"
            ></ErrorMessage>
          </div>

          <div className="login-form-group">
            <Field
              className="form-field"
              name="password"
              placeHolder="password"
            ></Field>

            <ErrorMessage
              className="form-error"
              component="span"
              name="password"
            ></ErrorMessage>
          </div>
          <div className="login-form-group">
            <Field
              className="form-field"
              name="confirmPassword"
              placeHolder="Confirm password"
            ></Field>

            <ErrorMessage
              className="form-error"
              component="span"
              name="confirmPassword"
            ></ErrorMessage>
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
