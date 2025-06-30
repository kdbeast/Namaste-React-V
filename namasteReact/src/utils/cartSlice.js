import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit uses immer BTS
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    // originalState = ["pizza"]
    clearCart: () => {
      // RTK - either Mutate the existing state or return a new state
      // state.items.length = 0; // originalState = []

      return {items: []}; // this new [] will replaced inside originalState = {items:[]}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
