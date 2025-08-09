import DataDisplayer from "./components/DataDisplayer/DataDisplayer";
import Charts from "./components/Charts/Charts";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import useExpenses from "./hooks/useExpenses";

// Add posibility to add new expenses

const App = () => {
  const { expenses, setExpenses, pieChartData, barChartData } = useExpenses();

  return (
    <div>
      <Charts pie={pieChartData} bar={barChartData} />
      <DataDisplayer expenses={expenses} setExpenses={setExpenses} />
      <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
    </div>
  );
};

export default App;
