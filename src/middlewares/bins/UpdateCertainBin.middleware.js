import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";
import { toast } from "react-toastify";
import { GetAllBins } from "./GetAllBins.middleware";

export const UpdateCertainBin = createAsyncThunk(
  "bins/UpdateCertainBin",
  async (params, thunkApi) => {
    try {
      const response = await axios.put(`/api/bins/${params.id}`, params);
      const data = await response.data;

      if (response.status === 200) {
        toast.success("Bin Updated Successfully");
        thunkApi.dispatch(GetAllBins());
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
