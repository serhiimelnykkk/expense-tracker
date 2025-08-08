import { useState, useEffect } from "react";
import { type Expense } from "../types";

const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>(
    JSON.parse(localStorage.getItem("expenses") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const costOfCategories = expenses.reduce((result, expense) => {
    const category = expense.category;

    if (!result[category]) {
      result[category] = 0;
    }

    result[category] += expense.price;

    return result;
  }, {} as Record<string, number>);

  const costOfMonths = expenses.reduce((result, expense) => {
    const dateString = expense.date;
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const key = `${year}-${month}`;

    if (!result[key]) {
      result[key] = 0;
    }

    result[key] += expense.price;

    return result;
  }, {} as Record<string, number>);

  const pieChartData = Object.entries(costOfCategories).map(
    ([name, price]) => ({
      name,
      price,
    })
  );

  const barChartData = Object.entries(costOfMonths).map(([month, price]) => ({
    month,
    price,
  }));

  return { expenses, setExpenses, pieChartData, barChartData };
};

export default useExpenses;
