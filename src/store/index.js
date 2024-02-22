import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slices/authSlice.slice";
import jwt_decode from "jwt-decode";
import persistedReducer from "./rootReducer";
import persistStore from "redux-persist/es/persistStore";
import { GetAllBins } from "../middlewares/bins/GetAllBins.middleware";
import ErrorHandler from "../utils/ErrorHandler";
import { GetAllCustomers } from "../middlewares/Customers/GetAllCustomers.middleware";
import { GetAllEmployees } from "../middlewares/Employees/GetAllEmployees.middleware";
import { GetAllAdmins } from "../middlewares/Admins/GetAllAdmins.middleware";

var token = localStorage.getItem("token") ?? "";

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
const dateNow = new Date();
if (token !== undefined || token !== "") {
  var decoded;
  try {
    decoded = jwt_decode(JSON.parse(token), { complete: true });
  } catch (err) {
    console.log(err);
  }
  if (decoded && decoded.role === "admin") {
    console.log("====================================");
    console.log(decoded);
    console.log("====================================");
    store.dispatch(GetAllBins()).then((res) => ErrorHandler(res));
    store.dispatch(GetAllCustomers()).then((res) => ErrorHandler(res));
    store.dispatch(GetAllEmployees()).then((res) => ErrorHandler(res));
    store.dispatch(GetAllAdmins()).then((res) => ErrorHandler(res));
  }
}

export const persistor = persistStore(store);
export const AppDispatch = store.dispatch;
export const AppThunk = (dispatch) => {};
export default store;
