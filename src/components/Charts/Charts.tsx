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
import { Flex } from "../../styles/styled";

interface ChartsProps {
  pie: {
    name: string;
    price: number;
  }[];
  bar: {
    month: string;
    price: number;
  }[];
}

const Charts = ({ pie, bar }: ChartsProps) => {
  return (
    <Flex>
      <PieChart width={300} height={250}>
        <Pie data={pie} dataKey="price" label />
        <Tooltip />
      </PieChart>
      <BarChart width={730} height={250} data={bar}>
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
