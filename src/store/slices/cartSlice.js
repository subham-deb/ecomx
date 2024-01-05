import { createSlice } from "@reduxjs/toolkit";

export const cart = createSlice({
  name: "cartProducts",
  initialState: {
    cartProducts: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      console.log("Payload", payload);

      state.cartProducts.push(payload);
    },

    removeFromCart: (state, { payload }) => {
      const index = state.cartProducts.findIndex(
        (product) => product.id === payload.id
      );
      state.cartProducts.splice(index, 1);
    },
    emptyCart: (state) => {
      state.cartProducts = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cart.actions;

export default cart.reducer;
