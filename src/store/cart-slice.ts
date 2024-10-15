import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../interfaces/CartProduct";
import { ProductInfo } from "../interfaces/ProductInfo";

interface CartState {
  items: Array<CartProduct>;
  subtotal: number;
  shipping: number;
  total: number;
}

const loadFromLocalStorage = (): CartState => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return {
        items: [],
        subtotal: 0,
        shipping: 0,
        total: 0,
      };
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Error loading cart from localStorage", e);
    return {
      items: [],
      subtotal: 0,
      shipping: 0,
      total: 0,
    };
  }
};

const saveToLocalStorage = (state: CartState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.warn("Error saving cart to localStorage", e);
  }
};

const initialState: CartState = loadFromLocalStorage();

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
      saveToLocalStorage(state);
    },
    increaseQuantity(state, action: PayloadAction<CartProduct>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity++;
      }

      recalculateTotals(state);
      saveToLocalStorage(state);
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
      saveToLocalStorage(state);
    },
    clearCart(state) {
      while (state.items.length > 0) {
        state.items.pop();
      }
      recalculateTotals(state);
      saveToLocalStorage(state);
    },
  },
});

export const { addItemToCart, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
