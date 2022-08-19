import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as yup from "yup";
import "./App.css";
import Register from "./components/Register";

function App() {
  const [register, setRegister] = useState(false);

  const handleClickLogin = (e) => {
    console.log(e);
  };

  const validationLogin = yup.object().shape({
    email: yup.string().email("Invalid E-mail").required("*Required Field"),
    password: yup
      .string()
      .min(6, "*Required 6 characters")
      .required("*Required Field"),
  });

  const openRegister = () => {
    register === true ? setRegister(false) : setRegister(true);
    console.log(register);
  };

  return (
    <div className="main-container">
      <div className="container">
        <h1 className="title">Login</h1>
        <Formik
          initialValues={{}}
          onSubmit={handleClickLogin}
          validationSchema={validationLogin}
        >
          <Form className="login-form">
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
            <button className="button" type="submit">
              Login
            </button>
          </Form>
        </Formik>
        <div className="btn-containder">
          <button className="register-btn" onClick={openRegister}>
            Register
          </button>
          I am not registered*
        </div>
        {register === true ? <Register /> : null}
      </div>
    </div>
  );
}

export default App;
