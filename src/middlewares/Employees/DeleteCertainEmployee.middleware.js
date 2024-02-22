import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";
import { toast } from "react-toastify";
import { GetAllEmployees } from "./GetAllEmployees.middleware";

export const DeleteCertainEmployee = createAsyncThunk(
  "employees/DeleteCertainEmployee",
  async (params, thunkApi) => {
    try {
      const response = await axios.delete("/api/employees/" + params.id);
      const data = await response.data;
      if (response.status === 200) {
        toast.success(data.message);
        thunkApi.dispatch(GetAllEmployees());
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
