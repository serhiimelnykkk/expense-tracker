import { type Expense } from "../../types";

interface DataDisplayerProps {
  expenses: Expense[];
}

const DataDisplayer = ({ expenses }: DataDisplayerProps) => {
  return (
    <>
      {expenses.map((expense) => (
        <div key={expense.id}>
          {expense.id} {expense.name} {expense.category} {expense.date}{" "}
          {expense.price}
        </div>
      ))}
    </>
  );
};

export default DataDisplayer;
