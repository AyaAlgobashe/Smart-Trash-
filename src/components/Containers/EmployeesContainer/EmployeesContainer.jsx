import React, { useState } from "react";
import DeleteModal from "../../Modal/DeleteModal";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import ErrorHandler from "../../../utils/ErrorHandler";
import SideOver from "../../SideOver/SideOver";
import SmartModal from "../../Modal/SmartModal";
import { useFormik } from "formik";
import {
  RegisterSchema,
  UpdateUserSchema,
} from "../../../schemas/RegisterForm";
import { employeesState } from "../../../slices/employeeSlice";
import { UpdateCertainEmployee } from "../../../middlewares/Employees/UpdateCertainEmployee.middleware";
import EmployeesTable from "../../Tables/EmployeesTable/EmployeesTable";
import EmployeeForm from "../../Forms/EmployeeForm/EmployeeForm";
import { DeleteCertainEmployee } from "../../../middlewares/Employees/DeleteCertainEmployee.middleware";
import { GetCertainEmployee } from "../../../middlewares/Employees/GetCertainEmployee.middleware";
import { CreateNewEmployee } from "../../../middlewares/Employees/CreateNewEmployee.middleware";
const EmployeesContainer = ({ data }) => {
  const dispatch = useAppDispatch();
  const { certainEmployeeData } = useAppSelector(employeesState);
  const [showSideOver, setShowSideOver] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showUpdateModal, setShowUpdateModal] = React.useState(false);
  const [deletedEmployee, setdeletedEmployee] = useState({});

  const handleToggleModal = () => {
    setShowModal((open) => !open);
  };
  const handleToggleUpdateModal = (id) => {
    dispatch(GetCertainEmployee({ id })).then((res) => {
      ErrorHandler(res);
      if (res.meta.requestStatus === "fulfilled") {
        setShowUpdateModal((open) => !open);
      }
    });
  };

  const handleOpenSideOver = (id) => {
    dispatch(GetCertainEmployee({ id })).then((res) => {
      ErrorHandler(res);
      if (res.meta.requestStatus === "fulfilled") {
        setShowSideOver(true);
      }
    });
  };
  const handleDeleteEmployee = (admin) => {
    setShowDeleteModal(true);
    setdeletedEmployee(admin);
  };
  const handleConfirmDelete = () => {
    dispatch(DeleteCertainEmployee({ id: deletedEmployee._id })).then((res) => {
      ErrorHandler(res);
      if (res.meta.requestStatus === "fulfilled") {
        setShowDeleteModal(false);
      }
    });
  };
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
        CreateNewEmployee({
          email,
          name,
          password,
          phone,
          role: "employee",
          username,
        })
      ).then((res) => {
        ErrorHandler(res);
        if (res.meta.requestStatus === "fulfilled") {
          FormHandler.resetForm();
          setShowModal(false);
        }
      });
    },
  });
  const updateHandler = useFormik({
    enableReinitialize: showUpdateModal,
    initialValues: {
      id: certainEmployeeData?._id ?? "",
      username: certainEmployeeData?.username ?? "",
      name: certainEmployeeData?.name ?? "",
      email: certainEmployeeData?.email ?? "",
      phone: certainEmployeeData?.phone ?? "",
    },
    validationSchema: UpdateUserSchema,
    onSubmit: (values) => {
      console.log(values);
      const { id, email, name, phone, username } = values;
      dispatch(
        UpdateCertainEmployee({
          id,
          email,
          name,
          phone,
          username,
        })
      ).then((res) => {
        ErrorHandler(res);
        if (res.meta.requestStatus === "fulfilled") {
          updateHandler.resetForm();
          setShowUpdateModal(false);
        }
      });
    },
  });
  return (
    <>
      <div className="admins">
        <div className="py-3 d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <h2 className="text-dark">Employees</h2>
            <p className="text-secondary">A list of all the Employees.</p>
          </div>
          <div>
            <button
              onClick={handleToggleModal}
              className="btn btn-info btn-lg btn-block btn-200"
            >
              Add New Employee
            </button>
          </div>
        </div>
        <EmployeesTable
          data={data}
          handleDeleteEmployee={handleDeleteEmployee}
          handleOpenSideOver={handleOpenSideOver}
          handleToggleUpdateModal={handleToggleUpdateModal}
        />
      </div>
      <SmartModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title="Add New Employee"
        handleSubmit={FormHandler.submitForm}
        isButtonDisabled={FormHandler.dirty && FormHandler.isValid}
      >
        <EmployeeForm FormHandler={FormHandler} formType={"create"} />
      </SmartModal>
      <SmartModal
        show={showUpdateModal}
        onHide={() => setShowUpdateModal(false)}
        title="Update Employee"
        handleSubmit={updateHandler.submitForm}
        isButtonDisabled={updateHandler.dirty && updateHandler.isValid}
      >
        <EmployeeForm FormHandler={updateHandler} formType={"update"} />
      </SmartModal>
      <DeleteModal
        title="Delete Employee"
        description={`Are you sure, you want to delete ${deletedEmployee.name} !`}
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        handleConfirmDelete={handleConfirmDelete}
      />
      <SideOver
        show={showSideOver}
        handleClose={() => setShowSideOver(false)}
        placement={"end"}
        data={certainEmployeeData}
      />
    </>
  );
};

export default EmployeesContainer;
