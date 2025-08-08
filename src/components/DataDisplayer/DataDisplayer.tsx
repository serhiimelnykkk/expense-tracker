import { expenses } from "../../store";

const DataDisplayer = () => {
  return (
    <>
      {expenses.map((expense) => (
        <div key={expense.id}>
          {expense.id} {expense.name} {expense.category}{" "}
          {expense.date.toLocaleDateString()} {expense.price}
        </div>
      ))}
    </>
  );
};

export default DataDisplayer;
