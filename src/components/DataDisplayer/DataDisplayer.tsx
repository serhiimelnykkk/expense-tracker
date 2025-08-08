import { type Expense } from "../../types";

interface DataDisplayerProps {
  expenses: Expense[];
}

const DataDisplayer = ({ expenses }: DataDisplayerProps) => {
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataDisplayer;
