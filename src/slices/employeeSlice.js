import { createSlice } from "@reduxjs/toolkit";
import { GetAllEmployees } from "../middlewares/Employees/GetAllEmployees.middleware";
import { GetCertainEmployee } from "../middlewares/Employees/GetCertainEmployee.middleware";

const initialState = {
  loading: false,
  errorMessage: null,
  employees: [],
  certainEmployeeData: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAllEmployees.pending, (state) => {
      state.loading = true;
      state.errorMessage = null;
    });
    builder.addCase(GetAllEmployees.fulfilled, (state, { payload }) => {
      state.errorMessage = null;
      state.loading = false;
      state.employees = payload.data;
    });
    builder.addCase(GetAllEmployees.rejected, (state, { payload }) => {
      state.errorMessage = payload?.data?.message;
      state.loading = false;
    });
    builder.addCase(GetCertainEmployee.pending, (state) => {
      state.loading = true;
      state.errorMessage = null;
    });
    builder.addCase(GetCertainEmployee.fulfilled, (state, { payload }) => {
      state.errorMessage = null;
      state.loading = false;
      state.certainEmployeeData = payload;
    });
    builder.addCase(GetCertainEmployee.rejected, (state, { payload }) => {
      state.errorMessage = payload?.data?.message;
      state.loading = false;
    });
  },
});

export const employeesReducer = employeeSlice.reducer;
export const employeesState = (state) => state.employees;
