import { type Expense } from "../../types";
import styled from "styled-components";

interface DataDisplayerProps {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
}

const Table = styled.table`
  width: 50%;
  border-collapse: collapse;
  background-color: #5c5c5c;
  color: white;
  padding: 5px 10px;
  outline: none;
  & th,
  tr,
  td {
    border: 1px solid #474747;
    padding: 10px;
  }
`;

const Button = styled.button`
  background-color: #272727;
  border: 1px solid #474747;
  color: white;
  padding: 5px 10px;
  outline: none;
  border-radius: 5px;
  transition: border 0.3s;
  font-size: 16px;

  &:hover {
    border: 1px solid #3689ff;
  }
`;

const Thead = styled.thead`
  & tr {
    text-align: left;
  }
`;

const DataDisplayer = ({ expenses, setExpenses }: DataDisplayerProps) => {
  const handleExpenseRemove = (id: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  return (
    <Table>
      <Thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Date</th>
        </tr>
      </Thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.category}</td>
            <td>{expense.price}</td>
            <td>{expense.date}</td>
            <td>
              <Button onClick={() => handleExpenseRemove(expense.id)}>
                Remove
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataDisplayer;
