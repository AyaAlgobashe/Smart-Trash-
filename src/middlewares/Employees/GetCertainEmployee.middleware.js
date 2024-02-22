import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";

export const GetCertainEmployee = createAsyncThunk(
  "employees/GetCertainEmployee",
  async (params, thunkApi) => {
    try {
      const response = await axios.get(`/api/employees/${params.id}`);
      const data = await response.data;

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
