import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  priceRange: [number, number][]; // [min, max]
  stars: number[];
  categories: string[];
  brands: string[];
}

const initialState: FilterState = {
  priceRange: [],
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
    setCategories(state, action: PayloadAction<Array<string>>) {
      state.categories = action.payload;
    },
    setBrands(state, action: PayloadAction<Array<string>>) {
      state.brands = action.payload;
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
