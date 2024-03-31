import React from "react";
import { useSelector } from "react-redux";

function Budget(props) {
  const { BudgetInitialValue } = props;
  const ReudxStoreValue = useSelector((state) => state.AddExpense);

  const { BudgetValue, RemainingAmount, TotalSpentAmount } = ReudxStoreValue;

  return (
    <>
      <div className="PARENT flex justify-around flex-wrap ">
        <div className="card w-96 bg-[#E55E27] my-7 md:my-0 text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="text-4xl">Budget</h2>
            <p className="text-xl">Your Budget is......</p>
            <div className="card-actions justify-end">
              <button className="btn btn-wide text-3xl">
                ${BudgetInitialValue}
              </button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-purple-600 my-7 md:my-0 text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="text-4xl">Remaning Amount</h2>
            <p className="text-xl"> Your Remaning Amount is....</p>
            <div className="card-actions justify-end">
              {RemainingAmount > 0 ? (
                <button className="btn btn-wide text-3xl">
                  ${RemainingAmount}
                </button>
              ) : (
                <button className="btn btn-wide text-red-900 text-3xl">
                  ${RemainingAmount}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="card w-96 bg-[#616FDF] my-7 md:my-0 text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="text-4xl">Total Spent Amount</h2>
            <p className="text-xl">You Total Spent Amount is......</p>
            <div className="card-actions justify-end">
              <button className="btn btn-wide text-3xl">
                ${TotalSpentAmount}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="Container w-full bg-green-500 grid grid-cols-12">
        <div className="Budget col-span-4 mx-5 p-4 text-xl flex flex-col items-start gap-3">
          Budget
          <input
            value={BudgetInitialValue}
            className="border-0 active:border-0 px-3"
            type="number"
            placeholder="Enter Your Budget..."
            readOnly // Add readOnly attribute here
          />
        </div>
        <div className="Remaning col-span-4 mx-5 p-4 text-xl flex flex-col items-start gap-3">
          {" "}
          Your Remaning Amount is
          {RemainingAmount > 0 ? (
            <span>${RemainingAmount}</span>
          ) : (
            <span className="text-red-800">${RemainingAmount}</span>
          )}
        </div>
        <div className="Spent col-span-4 mx-5 p-4 text-xl flex flex-col items-start gap-3">
          You Total Spent Amount is <span>${TotalSpentAmount} </span>
        </div>
      </div> */}
    </>
  );
}

export default Budget;
