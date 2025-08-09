import { type Expense } from "../../types";

interface DataDisplayerProps {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
}

const DataDisplayer = ({ expenses, setExpenses }: DataDisplayerProps) => {
  const handleExpenseRemove = (id: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.category}</td>
            <td>{expense.price}</td>
            <td>{expense.date}</td>
            <td>
              <button onClick={() => handleExpenseRemove(expense.id)}>
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataDisplayer;
