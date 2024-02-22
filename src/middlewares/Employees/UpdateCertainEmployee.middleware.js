import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";
import { toast } from "react-toastify";
import { GetAllEmployees } from "./GetAllEmployees.middleware";

export const UpdateCertainEmployee = createAsyncThunk(
  "employees/UpdateCertainEmployee",
  async (params, thunkApi) => {
    try {
      const response = await axios.put(`/api/employees/${params.id}`, params);
      const data = await response.data;

      if (response.status === 200) {
        toast.success("Employee Updated Successfully");
        thunkApi.dispatch(GetAllEmployees());
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
