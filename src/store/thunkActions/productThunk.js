import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../api/api";

export const getProductsAction = createAsyncThunk("product/get", async () => {
  const response = await getProducts();
  return response;
});

