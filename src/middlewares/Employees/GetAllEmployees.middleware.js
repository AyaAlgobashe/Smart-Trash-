import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";

export const GetAllEmployees = createAsyncThunk(
  "employees/getAllEmployee",
  async (params, thunkApi) => {
    try {
      const response = await axios.get("/api/employees/", { params });
      const data = await response.data;
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
