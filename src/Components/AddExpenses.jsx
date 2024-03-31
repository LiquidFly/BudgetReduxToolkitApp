import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddExpensesAction } from "../Store/Slices.js";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

function AddExpenses() {
  const uuid = uuidv4();
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");

  function AddExpenseToList() {
    if (Name === "" || Price === "") {
      toast.error("Enter All Details of the Expenses");
    } else {
      const NewExpense = { NAME: Name, PRICE: Price, ID: uuid };

      dispatch(AddExpensesAction(NewExpense));
      toast.success("Expense added successfully");
    }
    setName("");
    setPrice("");
  }

  return (
    <>
      <div className="flex bg-white flex-col gap-5 w-[50%]  border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="bg-[#407ED3] border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-slate-900 dark:border-gray-700">
          <p className="mt-1 text-3xl  text-white dark:text-gray-500">
            Add Expenses
          </p>
        </div>
        <div className="p-4  flex gap-3 justify-center md:p-5">
          <input
            onChange={(e) => setName(e.target.value)}
            value={Name}
            type="text"
            placeholder="Enter Your Item Name..."
            className="input input-bordered w-full max-w-xs"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={Price}
            type="number"
            placeholder="Enter Your Item Cost in ($)..."
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button
          onClick={() => AddExpenseToList()}
          className="btn bg-[#30DB97] text-2xl text-center"
        >
          Add Expenses
        </button>
      </div>
    </>
  );
}

export default AddExpenses;
