import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";
export const RegisterUser = createAsyncThunk(
  "user/Register",
  async (params, thunkApi) => {
    try {
      const response = await axios.post(`/api/users/${params.role}/register/`, {
        username: params.username,
        name: params.name,
        email: params.email,
        password: params.password,
        phone: params.phone,
      });
      const data = await response.data;
      if (response.status === 201) {
        console.log(data);
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error?.response);
    }
  }
);
