import { createSlice } from "@reduxjs/toolkit";
import { GetAllBins } from "../middlewares/bins/GetAllBins.middleware";
import { GetCertainBin } from "../middlewares/bins/GetCertainBin.middleware";

const initialState = {
  loading: false,
  errorMessage: null,
  binsData: [],
  certainBinData: null,
};

const binsSlice = createSlice({
  name: "bins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAllBins.pending, (state) => {
      state.loading = true;
      state.errorMessage = null;
    });
    builder.addCase(GetAllBins.fulfilled, (state, { payload }) => {
      state.errorMessage = null;
      state.loading = false;
      state.binsData = payload.data;
    });
    builder.addCase(GetAllBins.rejected, (state, { payload }) => {
      state.errorMessage = payload?.data?.message;
      state.loading = false;
    });
    builder.addCase(GetCertainBin.pending, (state) => {
      state.loading = true;
      state.errorMessage = null;
    });
    builder.addCase(GetCertainBin.fulfilled, (state, { payload }) => {
      state.errorMessage = null;
      state.loading = false;
      state.certainBinData = payload;
    });
    builder.addCase(GetCertainBin.rejected, (state, { payload }) => {
      state.errorMessage = payload?.data?.message;
      state.loading = false;
    });
  },
});
export const binsReducer = binsSlice.reducer;
export const binsState = (state) => state.bins;
