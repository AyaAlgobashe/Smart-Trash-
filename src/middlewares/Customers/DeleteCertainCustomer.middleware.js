import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";
import { toast } from "react-toastify";
import { GetAllCustomers } from "./GetAllCustomers.middleware";

export const DeleteCertainCustomer = createAsyncThunk(
  "customers/DeleteCertainCustomer",
  async (params, thunkApi) => {
    try {
      const response = await axios.delete("/api/customers/" + params.id);
      const data = await response.data;
      if (response.status === 200) {
        toast.success(data.message);
        thunkApi.dispatch(GetAllCustomers());
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
