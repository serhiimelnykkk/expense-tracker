import DataDisplayer from "./components/DataDisplayer/DataDisplayer";
import Charts from "./components/Charts/Charts";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import useExpenses from "./hooks/useExpenses";
import { Flex } from "./styles/styled";

const App = () => {
  const { expenses, setExpenses, pieChartData, barChartData } = useExpenses();

  return (
    <Flex
      $css={{
        width: "50%",
        padding: "10px 0",
        flexDirection: "column",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <Charts pie={pieChartData} bar={barChartData} />
      <Flex
        $css={{
          alignItems: "flex-start",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <DataDisplayer expenses={expenses} setExpenses={setExpenses} />
        <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
      </Flex>
    </Flex>
  );
};

export default App;
