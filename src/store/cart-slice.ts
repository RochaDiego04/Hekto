import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../interfaces/CartProduct";
import { ProductInfo } from "../interfaces/ProductInfo";
import { CartSubmission } from "../interfaces/CartSubmission";

interface CartState {
  items: Array<CartProduct>;
  subtotal: number;
  shipping: number;
  total: number;
  totalItems: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export const submitCart = createAsyncThunk(
  "cart/submitCart",
  async (cartItems: CartSubmission, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5000/submitCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItems),
      });

      if (!response.ok) {
        throw new Error("Failed to submit cart");
      }

      return await response.json();
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

const loadFromLocalStorage = (): CartState => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return {
        items: [],
        subtotal: 0,
        shipping: 0,
        total: 0,
        totalItems: 0,
        status: "idle",
        error: null,
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
      totalItems: 0,
      status: "idle",
      error: null,
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
  state.totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0);
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
  extraReducers: (builder) => {
    builder
      .addCase(submitCart.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(submitCart.fulfilled, (state) => {
        state.status = "succeeded";
        state.items = [];
        recalculateTotals(state);
        saveToLocalStorage(state);
      })
      .addCase(submitCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { addItemToCart, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
