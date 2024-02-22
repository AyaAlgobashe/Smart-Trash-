import { useFormik } from "formik";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../../middlewares/Auth/RegisterUser.middleware";
import { toast } from "react-toastify";
import { RegisterSchema } from "../../../schemas/RegisterForm";
import FormInput from "../../../shared/FormInput";
import { useAppDispatch } from "../../../store/hooks";

const RegisterForm = () => {
  const [selectedOption, setSelectedOption] = useState("admin");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const FormHandler = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      console.log(values);
      const { email, name, password, phone, username } = values;
      dispatch(
        RegisterUser({
          email,
          name,
          password,
          phone,
          role: selectedOption,
          username,
        })
      ).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          FormHandler.resetForm();
          toast.success("You SignUp successfully, now you can login");
          navigate("/Login", { replace: true });
        } else {
          toast.error(res?.payload?.data?.message);
        }
      });
    },
  });
  const { errors, touched } = FormHandler;
  return (
    <form className="main-form" onSubmit={FormHandler.handleSubmit}>
      <div className="row needs-validation justify-content-around">
        <div className="col-xl-5">
          <div className="input1">
            <FormInput
              formik={FormHandler}
              name="name"
              type="text"
              label="Full Name"
              required={true}
              id="name"
            />
          </div>
          <div className="input1">
            <FormInput
              formik={FormHandler}
              name="username"
              type="text"
              label="username"
              required={true}
              id="username"
            />
          </div>
          <div className="input1">
            <FormInput
              formik={FormHandler}
              name="phone"
              type="text"
              label="Phone Number"
              required={true}
              id="phone"
            />
          </div>
        </div>

        <div className="col-xl-5">
          <div className="input1">
            <FormInput
              formik={FormHandler}
              name="email"
              type="email"
              label="Email"
              required={true}
              id="email"
            />
          </div>
          <div className="input1">
            <FormInput
              formik={FormHandler}
              name="password"
              type="password"
              label="Password"
              required={true}
              id="password"
            />
          </div>
          <div className="input1">
            <label htmlFor="validationServer01" className="form-label">
              Role
            </label>
            <Form.Select
              aria-label="Default select example"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option disabled>Select Role</option>
              <option value="admin">admin</option>
              <option value="employee">employee</option>
              <option value="customer">customer</option>
            </Form.Select>
          </div>
          <div className="lastButt ">
            <button
              disabled={!(FormHandler.dirty && FormHandler.isValid)}
              className={`btn btn-200 ${
                FormHandler.dirty && FormHandler.isValid ? "" : "disabled"
              }`}
              type="submit"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
