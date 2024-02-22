import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";
import { toast } from "react-toastify";
import { GetAllAdmins } from "./GetAllAdmins.middleware";

export const UpdateCertainAdmin = createAsyncThunk(
  "admins/UpdateCertainAdmin",
  async (params, thunkApi) => {
    try {
      const response = await axios.put(`/api/admins/${params.id}`, params);
      const data = await response.data;

      if (response.status === 200) {
        toast.success("Admin Updated Successfully");
        thunkApi.dispatch(GetAllAdmins());
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
