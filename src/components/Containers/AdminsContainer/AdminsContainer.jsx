import React, { useState } from "react";
import AdminsTable from "../../Tables/AdminsTable/AdminsTable";
import "./AdminsContainer.css";
import DeleteModal from "../../Modal/DeleteModal";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { DeleteCertainAdmin } from "../../../middlewares/Admins/DeleteCertainAdmin.middleware";
import ErrorHandler from "../../../utils/ErrorHandler";
import SideOver from "../../SideOver/SideOver";
import { adminsState } from "../../../slices/adminSlice.slice";
import { GetCertainAdmin } from "../../../middlewares/Admins/GetCertainAdmin.middleware";
import SmartModal from "../../Modal/SmartModal";
import AdminForm from "../../Forms/AdminForm/AdminForm";
import { useFormik } from "formik";
import { CreateNewAdmin } from "../../../middlewares/Admins/CreateNewAdmin.middleware";
import {
  RegisterSchema,
  UpdateUserSchema,
} from "../../../schemas/RegisterForm";
import { UpdateCertainAdmin } from "../../../middlewares/Admins/UpdateCertainAdmin.middleware";
const AdminsContainer = ({ data }) => {
  const dispatch = useAppDispatch();
  const { certainAdminData } = useAppSelector(adminsState);
  const [showSideOver, setShowSideOver] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showUpdateModal, setShowUpdateModal] = React.useState(false);
  const [deletedAdmin, setDeletedAdmin] = useState({});

  const handleToggleModal = () => {
    setShowModal((open) => !open);
  };
  const handleToggleUpdateModal = (id) => {
    dispatch(GetCertainAdmin({ id })).then((res) => {
      ErrorHandler(res);
      if (res.meta.requestStatus === "fulfilled") {
        setShowUpdateModal((open) => !open);
      }
    });
  };

  const handleOpenSideOver = (id) => {
    dispatch(GetCertainAdmin({ id })).then((res) => {
      ErrorHandler(res);
      if (res.meta.requestStatus === "fulfilled") {
        setShowSideOver(true);
      }
    });
  };
  const handleDeleteAdmin = (admin) => {
    setShowDeleteModal(true);
    setDeletedAdmin(admin);
  };
  const handleConfirmDelete = () => {
    dispatch(DeleteCertainAdmin({ id: deletedAdmin._id })).then((res) => {
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
        CreateNewAdmin({
          email,
          name,
          password,
          phone,
          role: "admin",
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
      id: certainAdminData?._id ?? "",
      username: certainAdminData?.username ?? "",
      name: certainAdminData?.name ?? "",
      email: certainAdminData?.email ?? "",
      phone: certainAdminData?.phone ?? "",
    },
    validationSchema: UpdateUserSchema,
    onSubmit: (values) => {
      console.log(values);
      const { id, email, name, phone, username } = values;
      dispatch(
        UpdateCertainAdmin({
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
            <h2 className="text-dark">Admins</h2>
            <p className="text-secondary">A list of all the Admins.</p>
          </div>
          <div>
            <button
              onClick={handleToggleModal}
              className="btn btn-info btn-lg btn-block btn-200"
            >
              Add New Admin
            </button>
          </div>
        </div>
        <AdminsTable
          data={data}
          handleDeleteAdmin={handleDeleteAdmin}
          handleOpenSideOver={handleOpenSideOver}
          handleToggleUpdateModal={handleToggleUpdateModal}
        />
      </div>
      <SmartModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title="Add New Admin"
        handleSubmit={FormHandler.submitForm}
        isButtonDisabled={FormHandler.dirty && FormHandler.isValid}
      >
        <AdminForm FormHandler={FormHandler} formType={"create"} />
      </SmartModal>
      <SmartModal
        show={showUpdateModal}
        onHide={() => setShowUpdateModal(false)}
        title="Update Admin"
        handleSubmit={updateHandler.submitForm}
        isButtonDisabled={updateHandler.dirty && updateHandler.isValid}
      >
        <AdminForm FormHandler={updateHandler} formType={"update"} />
      </SmartModal>
      <DeleteModal
        title="Delete Admin"
        description={`Are you sure, you want to delete ${deletedAdmin.name} !`}
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        handleConfirmDelete={handleConfirmDelete}
      />
      <SideOver
        show={showSideOver}
        handleClose={() => setShowSideOver(false)}
        placement={"end"}
        data={certainAdminData}
      />
    </>
  );
};

export default AdminsContainer;
