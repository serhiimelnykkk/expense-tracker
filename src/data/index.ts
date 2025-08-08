import { expenses } from "../store";

const costOfCategories = expenses.reduce((result, expense) => {
  const category = expense.category;

  if (!result[category]) {
    result[category] = 0;
  }

  result[category] += expense.price;

  return result;
}, {} as Record<string, number>);

const costOfMonths = expenses.reduce((result, expense) => {
  const date = expense.date;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const key = `${year}-${month}`;

  if (!result[key]) {
    result[key] = 0;
  }

  result[key] += expense.price;

  return result;
}, {} as Record<string, number>);

export const pieChartData = Object.entries(costOfCategories).map(
  ([name, price]) => ({
    name,
    price,
  })
);

export const barChartData = Object.entries(costOfMonths).map(
  ([month, price]) => ({
    month,
    price,
  })
);
