import "./Login.css";
import Logo from "../Logo";
import { Formik, Form, Field } from "formik";
import { Credentials } from "../../../lib/types";

interface Props {
  handleLogin: (values: Credentials) => void;
  message: string;
}

const Login = ({ handleLogin, message }: Props) => {
  return (
    <div className="general">
      <div className="half left">
        <div className="left-content">
          <div className="logo">
            <Logo color={true} />
          </div>
          <h1 className="text-white italic text-4xl w-[40rem]">
            "Tus empleados son guapos, pero lo seran mas si los certificas"
          </h1>
        </div>
      </div>
      <div className="half right">
        <div className="login-box">
          <p className="text-xl font-bold">LOG IN</p>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values: Credentials) => {
              handleLogin(values);
            }}
          >
            <Form>
              <div>
                <div className="login-field gap-3">
                  <label htmlFor="email">Email</label>
                  <Field
                    id="email"
                    name="email"
                    placeholder="email@ibm.com"
                    className="text-field"
                  />
                </div>
                <div className="login-field gap-3">
                  <label htmlFor="password">Password</label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    className="text-field"
                  />
                </div>
              </div>
              <button type="submit" className="login-button bg-[#001d6c]">
                Log in
              </button>
            </Form>
          </Formik>
          {message && <p className="text-red-600 mt-8 text-sm">*{message}*</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
