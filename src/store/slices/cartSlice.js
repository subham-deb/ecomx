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
    // removeSelectedIds: (state, { payload }) => {
    //   state.selectedIds = state.selectedIds.filter(
    //     (sid) => !payload.objectIds.includes(sid)
    //   );

    //   if (state.selectedIds.length === 0) {
    //     state.selectedObjectType = "";
    //   }
    // },
    // resetSelection: (state) => {
    //   state.selectedIds = [];
    //   state.selectedObjectType = "";
    // },
  },
});

export const { addToCart } = cart.actions;

export default cart.reducer;
