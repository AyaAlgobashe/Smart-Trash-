import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";

export const GetCertainAdmin = createAsyncThunk(
  "admins/GetCertainAdmin",
  async (params, thunkApi) => {
    try {
      const response = await axios.get(`/api/admins/${params.id}`);
      const data = await response.data;

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
