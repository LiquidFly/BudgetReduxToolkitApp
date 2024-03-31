import React from "react";
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from "recharts";
import { useSelector } from "react-redux";

const Example = () => {
  const ReduxState = useSelector((state) => state.AddExpense);

  const { BudgetValue, RemainingAmount, TotalSpentAmount } = ReduxState;
  const data = [
    { name: "Remaning Amount", value: RemainingAmount, color: "#7FFF7F" },
    { name: "Total Spent", value: TotalSpentAmount, color: "#b30000" },
  ];

  const colors = data.map((entry) => entry.color);
  return (
    <div style={{ width: "30%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} label>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Example;
