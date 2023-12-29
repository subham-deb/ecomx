import { createSlice } from "@reduxjs/toolkit";
import { getProductsAction } from "../thunkActions/productThunk";

const products = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsAction.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
  },
});

export default products.reducer;
