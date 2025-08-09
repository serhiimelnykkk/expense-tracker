import { useForm, type SubmitHandler } from "react-hook-form";
import { type Expense } from "../../types";
import { Flex } from "../../styles/styled";
import styled from "styled-components";

interface FormValues {
  name: string;
  price: number;
  category: string;
  date: string;
}

interface ExpenseFormProps {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
}

const Input = styled.input`
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

const Form = styled.form`
  background-color: #525252;
  width: 45%;
  padding: 15px 10px;
  border-radius: 5px;
  border: 2px solid gray;
`;

const Error = styled.p`
  background-color: #ff7979;
  border: 2px solid red;
  border-radius: 5px;
  color: white;
  padding: 5px;
`;

const Heading = styled.h4`
  color: white;
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

const ExpenseForm = ({ setExpenses }: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      date: new Date(Date.now()).toLocaleDateString("en-CA"),
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const expense: Expense = {
      ...data,
      id: crypto.randomUUID(),
      price: Number(data.price),
    };

    setExpenses((prev) => [...prev, expense]);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Flex $css={{ flexDirection: "column", gap: "10px" }}>
          <Heading>Add Expense</Heading>
          {errors.name?.message && <Error>{errors.name?.message}</Error>}
          <Input
            type="text"
            placeholder="Expense name"
            {...register("name", {
              required: "Required",
              minLength: { value: 3, message: "Minimum length is 3" },
            })}
          />
          {errors.price?.message && <Error>{errors.price?.message}</Error>}
          <Input
            type="number"
            placeholder="Price"
            {...register("price", {
              required: "Required",
              min: { value: 1, message: "Minimum price is 1" },
              max: {
                value: 100_000_000,
                message: "Maximum price is 100,000,000",
              },
            })}
          />
          {errors.category?.message && (
            <Error>{errors.category?.message}</Error>
          )}
          <Input
            type="text"
            placeholder="Category"
            {...register("category", {
              required: "Required",
              minLength: { value: 3, message: "Minimum Length is 3" },
            })}
          />
          {errors.date?.message && <Error>{errors.date?.message}</Error>}
          <Input
            type="date"
            placeholder="Date"
            {...register("date", { required: "Required" })}
          />
          <Flex>
            <Button
              style={{ width: "50%" }}
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </Button>
            <Button
              disabled={isSubmitting}
              type="reset"
              style={{ width: "50%" }}
            >
              {isSubmitting ? "Loading..." : "Reset"}
            </Button>
          </Flex>
        </Flex>
      </Form>
    </>
  );
};

export default ExpenseForm;
