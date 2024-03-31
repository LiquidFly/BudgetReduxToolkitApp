import React, { useState } from "react";
import Container from "./../Components/Container";
import Budget from "./../Components/Budget";
import ExpensesList from "./../Components/ExpensesList";
import AddExpenses from "./../Components/AddExpenses";
import { useDispatch } from "react-redux";
import { setInitialBudget } from "../Store/Slices.js";
import Example from "./../Components/Chart";

function MainPage() {
  const [BudgetValueInput, setBudgetValueInput] = useState("");
  const [Proceed, setProceed] = useState(false);
  const dispatch = useDispatch();

  function handleOnClick(BudgetValueInput) {
    dispatch(setInitialBudget(Number(BudgetValueInput)));
    {
      BudgetValueInput && setProceed(true);
    }
  }

  return (
    <Container>
      {Proceed ? (
        <>
          <Budget BudgetInitialValue={BudgetValueInput}></Budget>
          <div className="flex justify-around items-center flex-wrap">
            <AddExpenses></AddExpenses>
            <Example></Example>
          </div>
          <ExpensesList></ExpensesList>
        </>
      ) : (
        <div className="flex items-center justify-center">
          <div className="min-w-full p-6 bg-[#4D86BE] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                Enter Your Initial Budget To Proceed...
              </h5>
            </a>
            <div className="flex min-w-full flex-col items-center justify-center">
              <div className=" w-[50%] mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    onChange={(e) => setBudgetValueInput(e.target.value)}
                    value={BudgetValueInput}
                    type="number"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Your Initial Budget in $..."
                    required
                  />
                </div>
              </div>

              <button
                onClick={() => handleOnClick(BudgetValueInput)}
                type="button"
                className="focus:outline-none mt-9 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Procced To App
              </button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

export default MainPage;
