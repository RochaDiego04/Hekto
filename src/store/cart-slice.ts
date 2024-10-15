import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../interfaces/CartProduct";
import { ProductInfo } from "../interfaces/ProductInfo";

interface CartState {
  items: Array<CartProduct>;
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

const recalculateTotals = (state: CartState) => {
  state.subtotal = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  state.shipping = state.subtotal > 100 ? 0 : 10;
  state.total = state.subtotal + state.shipping;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<ProductInfo>) {
      // redux toolkit makes the state immutable under the hood
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Increase quantity if the product already exists in the cart
        existingItem.quantity += 1;
      } else {
        const cartProduct: CartProduct = {
          ...newItem,
          quantity: 1,
        };
        state.items.push(cartProduct);
      }

      recalculateTotals(state);
    },
    increaseQuantity(state, action: PayloadAction<CartProduct>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity++;
      }

      recalculateTotals(state);
    },
    decreaseQuantity(state, action: PayloadAction<CartProduct>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }

      recalculateTotals(state);
    },
  },
});

export const { addItemToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
