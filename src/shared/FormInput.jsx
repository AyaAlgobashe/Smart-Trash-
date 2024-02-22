import React, { useState } from "react";

const FormInput = ({
  formik,
  name,
  label,
  type,
  id,
  required,
  placeholder = "",
}) => {
  const { errors, touched, values, handleChange, handleBlur } = formik;

  return (
    <>
      <label
        htmlFor={id}
        className={`form-label ${
          errors[name ?? "default"] && touched[name ?? "default"]
            ? "text-danger"
            : ""
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={`form-control ${
          errors[name ?? "default"] && touched[name ?? "default"]
            ? "text-danger border border-danger"
            : ""
        }`}
        value={values[name]}
        onChange={handleChange}
        required={required}
        placeholder={placeholder}
        name={name}
        onBlur={handleBlur}
      />
      {errors[name ?? "default"] && touched[name ?? "default"] ? (
        <div className="text-danger error-field">
          {errors[name]?.toString()}
        </div>
      ) : null}
    </>
  );
};

export default FormInput;
