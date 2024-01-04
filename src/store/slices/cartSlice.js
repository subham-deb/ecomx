import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cartProducts",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      console.log("Payload", payload);

      state.products.push(payload);
    },

    removeFromCart: (state, { payload }) => {
      const index = state.products.findIndex(
        (product) => product.id === payload.id
      );
      state.products.splice(index, 1);
    },
    emptyCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cart.actions;

export default cart.reducer;
