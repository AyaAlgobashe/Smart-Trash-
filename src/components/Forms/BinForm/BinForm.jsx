import React from "react";
import FormInput from "../../../shared/FormInput";

const BinForm = ({ FormHandler }) => {
  return (
    <form className="" onSubmit={FormHandler.handleSubmit}>
      <div className="row needs-validation justify-content-around">
        <div className="col-xl-5">
          <div className="input1">
            <FormInput
              formik={FormHandler}
              name="serialNumber"
              type="number"
              label="Serial Number"
              required={true}
              id="serialNumber"
            />
          </div>
          <div className="input1">
            <FormInput
              formik={FormHandler}
              name="latitude"
              type="number"
              label="Latitude"
              required={true}
              id="latitude"
            />
          </div>
          <div className="input1">
            <FormInput
              formik={FormHandler}
              name="longitude"
              type="number"
              label="Longitude"
              required={true}
              id="longitude"
            />
          </div>
        </div>

        <div className="col-xl-5">
          <div className="input1">
            <FormInput
              formik={FormHandler}
              name="status"
              type="number"
              label="Status"
              required={true}
              id="status"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default BinForm;
