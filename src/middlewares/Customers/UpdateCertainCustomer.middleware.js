import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";
import { toast } from "react-toastify";
import { GetAllCustomers } from "./GetAllCustomers.middleware";

export const UpdateCertainCustomer = createAsyncThunk(
  "customers/UpdateCertainCustomer",
  async (params, thunkApi) => {
    try {
      const response = await axios.put(`/api/customers/${params.id}`, params);
      const data = await response.data;

      if (response.status === 200) {
        toast.success("Customer Updated Successfully");
        thunkApi.dispatch(GetAllCustomers());
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
