import { createSlice } from "@reduxjs/toolkit";
import { GetAllCustomers } from "../middlewares/Customers/GetAllCustomers.middleware";
import { GetCertainCustomer } from "../middlewares/Customers/GetCertainCustomer.middleware";

const initialState = {
  loading: false,
  errorMessage: null,
  customers: [],
  certainCustomerData: null,
};

const customersSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAllCustomers.pending, (state) => {
      state.loading = true;
      state.errorMessage = null;
    });
    builder.addCase(GetAllCustomers.fulfilled, (state, { payload }) => {
      state.errorMessage = null;
      state.loading = false;
      state.customers = payload.data;
    });
    builder.addCase(GetAllCustomers.rejected, (state, { payload }) => {
      state.errorMessage = payload?.data?.message;
      state.loading = false;
    });
    builder.addCase(GetCertainCustomer.pending, (state) => {
      state.loading = true;
      state.errorMessage = null;
    });
    builder.addCase(GetCertainCustomer.fulfilled, (state, { payload }) => {
      state.errorMessage = null;
      state.loading = false;
      state.certainCustomerData = payload;

    });
    builder.addCase(GetCertainCustomer.rejected, (state, { payload }) => {
      state.errorMessage = payload?.data?.message;
      state.loading = false;
    });
  },
});

export const CustomersReducer = customersSlice.reducer;
export const customersState = (state) => state.customers;
