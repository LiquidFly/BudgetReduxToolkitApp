import { configureStore } from "@reduxjs/toolkit";
import AddExpensesSlice from "./Slices.js";

export const store = configureStore({
  reducer: {
    AddExpense: AddExpensesSlice,
  },
});
