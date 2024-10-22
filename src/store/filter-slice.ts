import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  priceRange: [number, number][]; // [min, max]
  stars: number[];
  categories: string[];
  brands: string[];
  currentPage: number; // current page number
  itemsPerPage: number; // number of items per page
  sortPriceOrder: "lowToHigh" | "highToLow";
}

const initialState: FilterState = {
  priceRange: [[0, 150]],
  stars: [],
  categories: [],
  brands: [],
  currentPage: 1, // default to page 1
  itemsPerPage: 5, // default items per page
  sortPriceOrder: "lowToHigh",
};

const filterSlice = createSlice({
  name: "filter",
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
    setItemsPerPage(state, action: PayloadAction<number>) {
      state.itemsPerPage = action.payload; // Set number of items per page
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload; // Set current page
    },
    setSortPriceOrder(state, action: PayloadAction<"lowToHigh" | "highToLow">) {
      state.sortPriceOrder = action.payload;
    },
    resetFilters(state) {
      return initialState; // Reset to initial state
    },
  },
});

export const {
  setPriceRange,
  setStars,
  setCategories,
  setBrands,
  setItemsPerPage,
  setCurrentPage,
  setSortPriceOrder,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
