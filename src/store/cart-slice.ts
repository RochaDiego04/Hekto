import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInfo } from "../interfaces/ProductInfo";

interface CartState {
  items: Array<ProductInfo>;
  subtotal: number;
  shipping: number;
  total: number;
}

const initialState: CartState = {
  items: [],
  subtotal: 0,
  shipping: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      // redux toolkit makes the state immutable under the hood
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push;
      }
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
