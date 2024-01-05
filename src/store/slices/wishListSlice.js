import { createSlice } from "@reduxjs/toolkit";

export const wishList = createSlice({
  name: "wishListProducts",
  initialState: {
    wishListProducts: [],
  },
  reducers: {
    addToWishList: (state, { payload }) => {
      const index = state.wishListProducts.findIndex(
        (product) => product.id === payload.id
      );
      if (index === -1) {
        state.wishListProducts.push(payload);
      }
    },

    removeFromWishList: (state, { payload }) => {
      const index = state.wishListProducts.findIndex(
        (product) => product.id === payload.id
      );
      state.wishListProducts.splice(index, 1);
    },
  },
});

export const { addToWishList, removeFromWishList } = wishList.actions;

export default wishList.reducer;
