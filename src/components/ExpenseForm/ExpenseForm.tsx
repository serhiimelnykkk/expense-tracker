import { useForm, type SubmitHandler } from "react-hook-form";
import { type Expense } from "../../types";

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
    formState: { isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      date: new Date(Date.now()).toLocaleDateString("en-CA"),
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);

    const expense: Expense = {
      ...data,
      id: crypto.randomUUID(),
      price: Number(data.price),
    };

    setExpenses((prev) => [...prev, expense]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("name", { required: true, minLength: 3 })}
      />
      <input
        type="number"
        {...register("price", { required: true, min: 1, max: 100_000_000 })}
      />
      <input
        type="text"
        {...register("category", { required: true, minLength: 3 })}
      />
      <input type="date" {...register("date", { required: true })} />
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default ExpenseForm;
