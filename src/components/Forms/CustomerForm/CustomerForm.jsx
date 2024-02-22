import React from "react";
import FormInput from "../../../shared/FormInput";

const CustomerForm = ({ FormHandler, formType }) => {
  return (
    <form className="" onSubmit={FormHandler.handleSubmit}>
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
          {formType === "create" ? (
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
          ) : null}
        </div>
      </div>
    </form>
  );
};

export default CustomerForm;
