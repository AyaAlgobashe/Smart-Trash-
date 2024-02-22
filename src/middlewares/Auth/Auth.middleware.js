import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios.util";
import { saveDataOnStorage } from "../../utils/localStorage.util";
export const AuthUser = createAsyncThunk(
  "user/auth",
  async (params, thunkApi) => {
    try {
      const response = await axios.post(`/api/users/${params.role}/login/`, {
        username: params.username,
        password: params.password,
      });
      const data = await response.data;
      if (response.status === 200) {
        saveDataOnStorage("token", data.token);
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error?.response);
    }
  }
);
