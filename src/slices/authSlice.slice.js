import { createSlice } from "@reduxjs/toolkit";
import { AuthUser } from "../middlewares/Auth/Auth.middleware";

const initialState = {
  loading: false,
  errorMessage: null,
  role: null,
  token: null,
  user: null,
  userEmail: null,
  userPhoneNumber: null,
  fullName: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAccountType: (state, { payload }) => {
      state.role = payload;
    },
    clearUserCredentials: (state) => {
      state.role = null;
      state.user = null;
      state.token = null;
    },
    clearAuthenticationError: (state) => {
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AuthUser.pending, (state) => {
      state.loading = true;
      state.errorMessage = null;
    });
    builder.addCase(AuthUser.fulfilled, (state, { payload }) => {
      state.errorMessage = null;
      state.user = payload.username;
      state.token = payload.token;
      state.role = payload.role;
      state.userPhoneNumber = payload.phone;
      state.userEmail = payload.email;
      state.fullName = payload.name;
      state.loading = false;
    });
    builder.addCase(AuthUser.rejected, (state, { payload }) => {
      state.errorMessage = payload?.data?.message;
      state.loading = false;
    });
  },
});
export const {
  updateAccountType,
  clearUserCredentials,
  clearAuthenticationError,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
export const AuthState = (state) => state.auth;
