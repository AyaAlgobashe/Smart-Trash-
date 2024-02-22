import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";

export const GetAllBins = createAsyncThunk(
  "bins/GetAllBins",
  async (params, thunkApi) => {
    try {
      const response = await axios.get("/api/bins/");
      const data = await response.data;

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
