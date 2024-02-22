import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";
import { toast } from "react-toastify";
import { GetAllBins } from "./GetAllBins.middleware";

export const DeleteCertainBin = createAsyncThunk(
  "bins/DeleteCertainBin",
  async (params, thunkApi) => {
    try {
      const response = await axios.delete("/api/bins/" + params.id);
      const data = await response.data;
      if (response.status === 200) {
        toast.success(data.message);
        thunkApi.dispatch(GetAllBins());
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
