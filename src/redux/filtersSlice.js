import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  searchValue: "",
};

const filtersSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    setFilterValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const filterReducer = filtersSlice.reducer;
export const { setFilterValue } = filtersSlice.actions;
