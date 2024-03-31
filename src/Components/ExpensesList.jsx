import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteExpensesAction } from "../Store/Slices.js";

function ExpensesList() {
  const dispatch = useDispatch();
  const ReduxState = useSelector((state) => state.AddExpense);

  const { ExpensesList } = ReduxState;

  function DeletItems(id) {
    console.log("ID: " + id);
    dispatch(DeleteExpensesAction(id));
  }

  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold text-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        ExpensesList
      </h1>
      <ul className="mt-3 flex flex-col shadow-xl">
        {ExpensesList.length > 0 ? (
          ExpensesList.map((Item) => {
            return (
              <>
                <li className="inline-flex text-xl items-center gap-x-2 py-3 px-4 bg-[#48B7ED]  border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
                  <div className="flex items-center justify-between w-full">
                    <span>{Item.NAME}</span>
                    <div className="flex gap-4 items-center">
                      <span> ${Item.PRICE}</span>
                      <button
                        onClick={() => DeletItems(Item.ID)}
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              </>
            );
          })
        ) : (
          <div
            className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-400 dark:bg-gray-800 dark:text-blue-400"
            role="alert"
          >
            <span className="font-medium">Enter Items</span> To Your List!!
          </div>
        )}
      </ul>
    </>
  );
}

export default ExpensesList;
