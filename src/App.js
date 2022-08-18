import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function App() {
  const handleClickLogin = (e) => {
    console.log(e);
  };

  const handleClickRegister = (e) => {
    console.log(e);
  };

  const validationLogin = yup.object().shape({
    email: yup.string().email("Invalid E-mail").required("*Required Field"),
    password: yup
      .string()
      .min(6, "*Required 6 characters")
      .required("*Campo obrigatório"),
  });

  const validationRegister = yup.object().shape({
    email: yup.string().email("Invalid E-mail").required("*Required Field"),
    password: yup
      .string()
      .min(6, "*Required 6 characters")
      .required("*Required Field"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Invalid Password"),
  });

  return (
    <div className="container">
      <h1>Login</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleClickRegister}
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

      <h1>Register</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleClickLogin}
        validationSchema={validationRegister}
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
          <div className="login-form-group">
            <Field
              className="form-field"
              name="passwordConfirm"
              placeHolder="password confirm"
            ></Field>

            <ErrorMessage
              className="form-error"
              component="span"
              name="passwordConfirm"
            ></ErrorMessage>
          </div>
          <button className="button" type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
