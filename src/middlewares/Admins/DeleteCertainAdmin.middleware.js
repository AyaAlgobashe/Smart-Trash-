import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";
import { toast } from "react-toastify";
import { GetAllAdmins } from "./GetAllAdmins.middleware";

export const DeleteCertainAdmin = createAsyncThunk(
  "admins/DeleteCertainAdmin",
  async (params, thunkApi) => {
    try {
      const response = await axios.delete("/api/admins/" + params.id);
      const data = await response.data;
      if (response.status === 200) {
        toast.success(data.message);
        thunkApi.dispatch(GetAllAdmins());
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
