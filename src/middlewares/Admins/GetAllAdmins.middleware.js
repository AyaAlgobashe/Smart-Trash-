import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";

export const GetAllAdmins = createAsyncThunk(
  "admins/GetAllAdmins",
  async (params, thunkApi) => {
    try {
      const response = await axios.get("/api/admins/", { params });
      const data = await response.data;
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
