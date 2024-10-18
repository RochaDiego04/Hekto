import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  priceRange: [number, number][]; // [min, max]
  stars: number[];
  categories: string[];
  brands: string[];
  pagination: [number, number]; // [min, max]
  sortPriceOrder: "lowToHigh" | "highToLow";
}

const initialState: FilterState = {
  priceRange: [[0, 150]],
  stars: [],
  categories: [],
  brands: [],
  pagination: [1, 5],
  sortPriceOrder: "lowToHigh",
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
      state.categories = action.payload;
    },
    setBrands(state, action: PayloadAction<string[]>) {
      state.brands = action.payload;
    },
    setPagination(state, action: PayloadAction<[number, number]>) {
      state.pagination = action.payload;
    },
    setSortPriceOrder(state, action: PayloadAction<"lowToHigh" | "highToLow">) {
      state.sortPriceOrder = action.payload;
    },
    resetFilters(state) {
      //TODO
      return initialState;
    },
  },
});

export const {
  setPriceRange,
  setStars,
  setCategories,
  setBrands,
  setPagination,
  setSortPriceOrder,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
