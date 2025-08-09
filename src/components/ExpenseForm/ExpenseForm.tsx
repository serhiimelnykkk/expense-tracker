import { useForm, type SubmitHandler } from "react-hook-form";
import { type Expense } from "../../types";
import { Flex } from "../../styles/styled";

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
    console.log(data, errors);

    const expense: Expense = {
      ...data,
      id: crypto.randomUUID(),
      price: Number(data.price),
    };

    setExpenses((prev) => [...prev, expense]);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex $css={{ flexDirection: "column", maxWidth: "300px" }}>
          <p>{errors.name?.message}</p>
          <input
            type="text"
            {...register("name", {
              required: "Required",
              minLength: { value: 3, message: "Minimum length is 3" },
            })}
          />
          <p>{errors.price?.message}</p>
          <input
            type="number"
            {...register("price", {
              required: "Required",
              min: { value: 1, message: "Minimum price is 1" },
              max: {
                value: 100_000_000,
                message: "Maximum price is 100,000,000",
              },
            })}
          />
          <p>{errors.category?.message}</p>
          <input
            type="text"
            {...register("category", {
              required: "Required",
              minLength: { value: 3, message: "Minimum Length is 3" },
            })}
          />
          <p>{errors.date?.message}</p>
          <input type="date" {...register("date", { required: "Required" })} />
          <button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Loading..." : "Submit"}
          </button>
        </Flex>
      </form>
    </>
  );
};

export default ExpenseForm;
