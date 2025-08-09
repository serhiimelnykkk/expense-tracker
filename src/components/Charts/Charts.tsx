import {
  PieChart,
  BarChart,
  Bar,
  Pie,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
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
    <Flex $css={{ width: "100%" }}>
      {pie.length !== 0 ? (
        <>
          <ResponsiveContainer width="30%" height={250}>
            <PieChart>
              <Pie data={pie} dataKey="price" label fill="#4b9c6a" />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="70%" height={250}>
            <BarChart data={bar}>
              <CartesianGrid />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="price" fill="#3a6baf" />
            </BarChart>
          </ResponsiveContainer>
        </>
      ) : (
        <Flex
          $css={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "250px",
            color: "white",
          }}
        >
          <p>Add data to display charts.</p>
        </Flex>
      )}
    </Flex>
  );
};

export default Charts;
