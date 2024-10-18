import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  priceRange: [number, number][]; // [min, max]
  stars: number[];
  categories: string[];
  brands: string[];
}

const initialState: FilterState = {
  priceRange: [[0, 1000]],
  stars: [],
  categories: [],
  brands: [],
};

const filterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setPriceRange(state, action: PayloadAction<[number, number][]>) {
      state.priceRange = action.payload;
    },
    setStars(state, action: PayloadAction<Array<number>>) {
      state.stars = action.payload;
    },
    setCategories(state, action: PayloadAction<string[]>) {
      state.categories = action.payload; // Directly set the new categories
    },
    setBrands(state, action: PayloadAction<string[]>) {
      state.brands = action.payload; // Directly set the new brands
    },
    resetFilters(state) {
      return initialState;
    },
  },
});

export const {
  setPriceRange,
  setStars,
  setCategories,
  setBrands,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
