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
import { customersState } from "../../../slices/customerSlice.slice";
import { GetCertainCustomer } from "../../../middlewares/Customers/GetCertainCustomer.middleware";
import { DeleteCertainCustomer } from "../../../middlewares/Customers/DeleteCertainCustomer.middleware";
import { CreateNewCustomer } from "../../../middlewares/Customers/CreateNewCustomer.middleware";
import { UpdateCertainCustomer } from "../../../middlewares/Customers/UpdateCertainCustomer.middleware";
import CustomersTable from "../../Tables/CustomersTable/CustomersTable";
import CustomerForm from "../../Forms/CustomerForm/CustomerForm";
const CustomerContainer = ({ data }) => {
  const dispatch = useAppDispatch();
  const { certainCustomerData } = useAppSelector(customersState);
  const [showSideOver, setShowSideOver] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showUpdateModal, setShowUpdateModal] = React.useState(false);
  const [deletedCustomer, setDeletedCustomer] = useState({});

  const handleToggleModal = () => {
    setShowModal((open) => !open);
  };
  const handleToggleUpdateModal = (id) => {
    dispatch(GetCertainCustomer({ id })).then((res) => {
      ErrorHandler(res);
      if (res.meta.requestStatus === "fulfilled") {
        setShowUpdateModal((open) => !open);
      }
    });
  };

  const handleOpenSideOver = (id) => {
    dispatch(GetCertainCustomer({ id })).then((res) => {
      ErrorHandler(res);
      if (res.meta.requestStatus === "fulfilled") {
        setShowSideOver(true);
      }
    });
  };
  const handleDeleteCustomer = (admin) => {
    setShowDeleteModal(true);
    setDeletedCustomer(admin);
  };
  const handleConfirmDelete = () => {
    dispatch(DeleteCertainCustomer({ id: deletedCustomer._id })).then((res) => {
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
        CreateNewCustomer({
          email,
          name,
          password,
          phone,
          role: "customer",
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
      id: certainCustomerData?._id ?? "",
      username: certainCustomerData?.username ?? "",
      name: certainCustomerData?.name ?? "",
      email: certainCustomerData?.email ?? "",
      phone: certainCustomerData?.phone ?? "",
    },
    validationSchema: UpdateUserSchema,
    onSubmit: (values) => {
      console.log(values);
      const { id, email, name, phone, username } = values;
      dispatch(
        UpdateCertainCustomer({
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
            <h2 className="text-dark">Customers</h2>
            <p className="text-secondary">A list of all the Customers.</p>
          </div>
          <div>
            <button
              onClick={handleToggleModal}
              className="btn btn-info btn-lg btn-block btn-200"
            >
              Add New Customer
            </button>
          </div>
        </div>
        <CustomersTable
          data={data}
          handleDeleteCustomer={handleDeleteCustomer}
          handleOpenSideOver={handleOpenSideOver}
          handleToggleUpdateModal={handleToggleUpdateModal}
        />
      </div>
      <SmartModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title="Add New Customer"
        handleSubmit={FormHandler.submitForm}
        isButtonDisabled={FormHandler.dirty && FormHandler.isValid}
      >
        <CustomerForm FormHandler={FormHandler} formType={"create"} />
      </SmartModal>
      <SmartModal
        show={showUpdateModal}
        onHide={() => setShowUpdateModal(false)}
        title="Update Customer"
        handleSubmit={updateHandler.submitForm}
        isButtonDisabled={updateHandler.dirty && updateHandler.isValid}
      >
        <CustomerForm FormHandler={updateHandler} formType={"update"} />
      </SmartModal>
      <DeleteModal
        title="Delete Customer"
        description={`Are you sure, you want to delete ${deletedCustomer.name} !`}
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        handleConfirmDelete={handleConfirmDelete}
      />
      <SideOver
        show={showSideOver}
        handleClose={() => setShowSideOver(false)}
        placement={"end"}
        data={certainCustomerData}
      />
    </>
  );
};

export default CustomerContainer;
