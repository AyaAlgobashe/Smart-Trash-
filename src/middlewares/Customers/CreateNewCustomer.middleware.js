import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";
import { toast } from "react-toastify";
import { GetAllCustomers } from "./GetAllCustomers.middleware";

export const CreateNewCustomer = createAsyncThunk(
  "customers/CreateNewCustomer",
  async (params, thunkApi) => {
    try {
      const response = await axios.post("/api/customers/", params);
      const data = await response.data;

      if (response.status === 201) {
        toast.success("New Customer Created Successfully");
        thunkApi.dispatch(GetAllCustomers());
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
