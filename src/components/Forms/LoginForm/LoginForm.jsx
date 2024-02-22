import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthUser } from "../../../middlewares/Auth/Auth.middleware";
import { toast } from "react-toastify";
import { Form, Spinner } from "react-bootstrap";
import { useState } from "react";
import FormInput from "../../../shared/FormInput";
import { LoginSchema } from "../../../schemas/LoginForm";
import LoadingAndNullHandler from "../../LoadingAndNullHandler/LoadingAndNullHandler";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { AuthState } from "../../../slices/authSlice.slice";

const LoginForm = () => {
  const [selectedOption, setSelectedOption] = useState("admin");
  const { loading } = useAppSelector(AuthState);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const FormHandler = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values);
      const { username, password } = values;
      dispatch(AuthUser({ username, password, role: selectedOption })).then(
        (res) => {
          if (res.meta.requestStatus === "fulfilled") {
            FormHandler.resetForm();
            navigate("/Home", { replace: true });
          } else {
            toast.error(res?.payload?.data?.message);
          }
        }
      );
    },
  });
  // if (loading) {
  //   return <LoadingAndNullHandler type="loading" />;
  // }
  return (
    <form style={{ width: "23rem" }} onSubmit={FormHandler.handleSubmit}>
      <h3 className=" mb-3 pb-3" style={{ letterSpacing: "1px" }}>
        Log in
      </h3>
      <div className="form-outline mb-4">
        <FormInput
          formik={FormHandler}
          name="username"
          type="text"
          label="Username"
          required={true}
          id="username"
        />
      </div>
      <div className="form-outline mb-4">
        <FormInput
          formik={FormHandler}
          name="password"
          type="password"
          label="Password"
          required={true}
          id="password"
        />
      </div>
      <div className="form-outline mb-4">
        <Form.Select
          aria-label="Default select example"
          size="sm"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option disabled>Select Role</option>
          <option value="admin">admin</option>
          <option value="employee">employee</option>
          <option value="customer">customer</option>
        </Form.Select>
      </div>
      <div className="pt-1 mb-4">
        {loading ? (
          <Spinner animation="grow" variant="success" />
        ) : (
          <button className="btn btn-info btn-lg btn-block btn-200" type="submit">
            Login
          </button>
        )}
      </div>
      <p className="small mb-5 pb-lg-2">
        <a className="text-muted" href="#!">
          Forgot password?
        </a>
      </p>
      <p>
        Don't have an account?
        <Link to={"../SignUp"} className="link-info ">
          Register here
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
