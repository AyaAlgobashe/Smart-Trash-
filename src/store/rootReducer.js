import { combineReducers } from "@reduxjs/toolkit";
import storage from "./storage";
import { authReducer } from "../slices/authSlice.slice";
import persistReducer from "redux-persist/es/persistReducer";
import { binsReducer } from "../slices/binsSlice.slice";
import { employeesReducer } from "../slices/employeeSlice";
import { CustomersReducer } from "../slices/customerSlice.slice";
import { AdminsReducer } from "../slices/adminSlice.slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  bins: binsReducer,
  employees: employeesReducer,
  customers: CustomersReducer,
  admins: AdminsReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
