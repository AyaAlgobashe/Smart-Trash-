import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";
import { toast } from "react-toastify";
import { GetAllBins } from "./GetAllBins.middleware";

export const CreateNewBin = createAsyncThunk(
  "bins/CreateNewBin",
  async (params, thunkApi) => {
    try {
      const response = await axios.post("/api/bins/", params);
      const data = await response.data;

      if (response.status === 200) {
        toast.success("New Bin Created Successfully");
        thunkApi.dispatch(GetAllBins());
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
