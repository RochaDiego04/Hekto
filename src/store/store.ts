import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import filterReducer from "./filter-slice";

export const store = configureStore({
  reducer: { cart: cartReducer, filter: filterReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
