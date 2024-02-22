import React, { useState } from "react";
import BinCompnent from "../../BinCompnent/BinCompnent";
import "./binContainer.css";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { DeleteCertainBin } from "../../../middlewares/bins/DeleteCertainBin.middleware";
import ErrorHandler from "../../../utils/ErrorHandler";
import DeleteModal from "../../Modal/DeleteModal";
import SmartModal from "../../Modal/SmartModal";
import BinForm from "../../Forms/BinForm/BinForm";
import { useFormik } from "formik";
import { CreateNewBin } from "../../../middlewares/bins/CreateNewBin.middleware";
import { BinSchema } from "../../../schemas/BinForm";
import { binsState } from "../../../slices/binsSlice.slice";
import { UpdateCertainBin } from "../../../middlewares/bins/UpdateCertainBin.middleware";
import { GetCertainBin } from "../../../middlewares/bins/GetCertainBin.middleware";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import BinView from "../../BinView/BinView";
const BinContainer = ({ data }) => {
  const { certainBinData } = useAppSelector(binsState);
  const [showModal, setShowModal] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [deletedBin, setDeletedBin] = React.useState({});
  const [showUpdateModal, setShowUpdateModal] = React.useState(false);
  const dispatch = useAppDispatch();

  const handleToggleModal = () => {
    setShowModal((open) => !open);
  };

  const handleToggleUpdateModal = (id) => {
    dispatch(GetCertainBin({ id })).then((res) => {
      ErrorHandler(res);
      if (res.meta.requestStatus === "fulfilled") {
        setShowUpdateModal((open) => !open);
      }
    });
  };
  const handleToggleMapModal = (id) => {
    dispatch(GetCertainBin({ id })).then((res) => {
      ErrorHandler(res);
      if (res.meta.requestStatus === "fulfilled") {
        setShowMapModal((open) => !open);
      }
    });
  };

  const handleDeleteBin = (bin) => {
    setShowDeleteModal(true);
    setDeletedBin(bin);
  };
  const handleConfirmDelete = () => {
    dispatch(DeleteCertainBin({ id: deletedBin._id })).then((res) => {
      ErrorHandler(res);
      if (res.meta.requestStatus === "fulfilled") {
        setShowDeleteModal(false);
      }
    });
  };
  const FormHandler = useFormik({
    initialValues: {
      serialNumber: null,
      latitude: null,
      longitude: null,
      status: null,
    },
    validationSchema: BinSchema,
    onSubmit: (values) => {
      console.log(values);
      const { latitude, longitude, serialNumber, status } = values;
      dispatch(
        CreateNewBin({
          latitude,
          longitude,
          serialNumber,
          status,
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
      id: certainBinData?._id ?? 0,
      serialNumber: certainBinData?.serialNumber ?? 0,
      latitude: certainBinData?.latitude ?? 0,
      longitude: certainBinData?.longitude ?? 0,
      status: certainBinData?.status ?? 0,
    },
    validationSchema: BinSchema,
    onSubmit: (values) => {
      console.log(values);
      const { latitude, longitude, serialNumber, status, id } = values;
      dispatch(
        UpdateCertainBin({
          id,
          latitude,
          longitude,
          serialNumber,
          status,
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
      <div className="bins">
        <div className="py-3 d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <h2 className="text-dark">Bins</h2>
            <p className="text-secondary">A list of all the Bins.</p>
          </div>
          <div>
            <button
              onClick={handleToggleModal}
              className="btn btn-info btn-lg btn-block btn-200"
            >
              Add New Bin
            </button>
          </div>
        </div>
        <div className="binContainer d-flex gap-3 flex-wrap">
          {data.map((bin) => (
            <BinCompnent
              key={bin._id}
              data={bin}
              handleDeleteBin={handleDeleteBin}
              handleToggleUpdateModal={handleToggleUpdateModal}
              handleToggleMapModal={handleToggleMapModal}
            />
          ))}
        </div>
      </div>
      <DeleteModal
        title="Delete Bin"
        description={`Are you sure, you want to delete with serial Number ${deletedBin.serialNumber} !`}
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        handleConfirmDelete={handleConfirmDelete}
      />
      <SmartModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title="Add New Bin"
        handleSubmit={FormHandler.submitForm}
        isButtonDisabled={FormHandler.dirty && FormHandler.isValid}
      >
        <BinForm FormHandler={FormHandler} />
      </SmartModal>
      <SmartModal
        show={showUpdateModal}
        onHide={() => setShowUpdateModal(false)}
        title="Update Admin"
        handleSubmit={updateHandler.submitForm}
        isButtonDisabled={updateHandler.dirty && updateHandler.isValid}
      >
        <BinForm FormHandler={updateHandler} />
      </SmartModal>
      <SmartModal
        show={showMapModal}
        onHide={() => setShowMapModal(false)}
        title="Bin View"
        method="view"
      >
        <BinView data={certainBinData} />
      </SmartModal>
    </>
  );
};

export default BinContainer;
