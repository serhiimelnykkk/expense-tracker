import { expenses } from "./store";
import {
  PieChart,
  BarChart,
  Bar,
  Pie,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { pieChartData, barChartData } from "./data";

const App = () => {
  return (
    <div>
      <PieChart width={730} height={250}>
        <Pie data={pieChartData} dataKey="price" label />
        <Tooltip />
      </PieChart>
      <BarChart width={730} height={250} data={barChartData}>
        <CartesianGrid />
        <XAxis dataKey="month" />
        <YAxis />
        <Legend />
        <Tooltip />
        <Bar dataKey="price" />
      </BarChart>
      {expenses.map((expense) => (
        <div key={expense.id}>
          {expense.id} {expense.name} {expense.category}{" "}
          {expense.date.toLocaleDateString()} {expense.price}
        </div>
      ))}
    </div>
  );
};

export default App;
