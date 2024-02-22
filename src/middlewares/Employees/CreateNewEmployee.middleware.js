import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";
import { toast } from "react-toastify";
import { GetAllEmployees } from "./GetAllEmployees.middleware";

export const CreateNewEmployee = createAsyncThunk(
  "employees/CreateNewEmployee",
  async (params, thunkApi) => {
    try {
      const response = await axios.post("/api/employees/", params);
      const data = await response.data;

      if (response.status === 201) {
        toast.success("New Employee Created Successfully");
        thunkApi.dispatch(GetAllEmployees());
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
