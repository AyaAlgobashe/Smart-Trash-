import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";
import { toast } from "react-toastify";
import { GetAllAdmins } from "./GetAllAdmins.middleware";

export const CreateNewAdmin = createAsyncThunk(
  "admins/CreateNewAdmin",
  async (params, thunkApi) => {
    try {
      const response = await axios.post("/api/admins/", params);
      const data = await response.data;

      if (response.status === 201) {
        toast.success("New Admin Created Successfully");
        thunkApi.dispatch(GetAllAdmins());
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
