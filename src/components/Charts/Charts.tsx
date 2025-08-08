import {
  PieChart,
  BarChart,
  Bar,
  Pie,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { pieChartData, barChartData } from "../../store";
import { Flex } from "../../styles/styled";

const Charts = () => {
  return (
    <Flex>
      <PieChart width={300} height={250}>
        <Pie data={pieChartData} dataKey="price" label />
        <Tooltip />
      </PieChart>
      <BarChart width={730} height={250} data={barChartData}>
        <CartesianGrid />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="price" />
      </BarChart>
    </Flex>
  );
};

export default Charts;
