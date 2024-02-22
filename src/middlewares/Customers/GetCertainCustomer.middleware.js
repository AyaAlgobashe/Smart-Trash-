import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";

export const GetCertainCustomer = createAsyncThunk(
  "customers/GetCertainCustomer",
  async (params, thunkApi) => {
    try {
      const response = await axios.get(`/api/customers/${params.id}`);
      const data = await response.data;

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
