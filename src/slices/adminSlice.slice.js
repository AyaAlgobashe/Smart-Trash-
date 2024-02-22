import { createSlice } from "@reduxjs/toolkit";
import { GetAllAdmins } from "../middlewares/Admins/GetAllAdmins.middleware";
import { GetCertainAdmin } from "../middlewares/Admins/GetCertainAdmin.middleware";

const initialState = {
  loading: false,
  errorMessage: null,
  admins: [],
  certainAdminData: null,
};
const adminsSlice = createSlice({
  name: "admins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAllAdmins.pending, (state) => {
      state.loading = true;
      state.errorMessage = null;
    });
    builder.addCase(GetAllAdmins.fulfilled, (state, { payload }) => {
      state.errorMessage = null;
      state.loading = false;
      state.admins = payload.data;
    });
    builder.addCase(GetAllAdmins.rejected, (state, { payload }) => {
      state.errorMessage = payload?.data?.message;
      state.loading = false;
    });
    builder.addCase(GetCertainAdmin.pending, (state) => {
      state.loading = true;
      state.errorMessage = null;
    });
    builder.addCase(GetCertainAdmin.fulfilled, (state, { payload }) => {
      state.errorMessage = null;
      state.loading = false;
      state.certainAdminData = payload;
    });
    builder.addCase(GetCertainAdmin.rejected, (state, { payload }) => {
      state.errorMessage = payload?.data?.message;
      state.loading = false;
    });
  },
});

export const AdminsReducer = adminsSlice.reducer;
export const adminsState = (state) => state.admins;
