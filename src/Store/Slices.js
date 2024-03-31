import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BudgetValue: 0,
  RemainingAmount: 0, // Ensure that RemainingAmount is initialized correctly
  TotalSpentAmount: 0,
  ExpensesList: [],
};

const AddExpensesSlice = createSlice({
  name: "AddExpenses",
  initialState,
  reducers: {
    AddExpensesAction: (state, action) => {
      const newExpense = action.payload;
      state.ExpensesList.push(newExpense);

      const expensePrice = parseFloat(newExpense.PRICE);
      state.TotalSpentAmount += expensePrice;
      state.RemainingAmount = state.BudgetValue - state.TotalSpentAmount;
      console.log(state.RemainingAmount);
    },
    DeleteExpensesAction: (state, action) => {
      const expenseIdToDelete = action.payload;
      const deletedExpense = state.ExpensesList.find(
        (expense) => expense.ID === expenseIdToDelete
      );

      if (deletedExpense) {
        const deletedExpensePrice = parseFloat(deletedExpense.PRICE);
        state.ExpensesList = state.ExpensesList.filter(
          (expense) => expense.ID !== expenseIdToDelete
        );
        state.TotalSpentAmount -= deletedExpensePrice;
        state.RemainingAmount = state.BudgetValue - state.TotalSpentAmount;
      }
    },
    setInitialBudget: (state, action) => {
      const newBudgetValue = parseFloat(action.payload);
      state.BudgetValue = newBudgetValue;
      state.RemainingAmount = newBudgetValue - state.TotalSpentAmount;
      console.log(state.RemainingAmount);
    },
  },
});

export const { AddExpensesAction, DeleteExpensesAction, setInitialBudget } =
  AddExpensesSlice.actions;
export default AddExpensesSlice.reducer;
