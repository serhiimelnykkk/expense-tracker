export interface Expense {
  id: number | string;
  name: string;
  price: number;
  date: Date;
  category: string;
}

export const expenses: Expense[] = [
  {
    id: 1,
    name: "Chips",
    price: 50,
    date: new Date("2025-01-01"),
    category: "Groceries",
  },
  {
    id: 2,
    name: "Milk",
    price: 50,
    date: new Date("2025-01-01"),
    category: "Groceries",
  },
  {
    id: 3,
    name: "Household Chemicals",
    price: 150,
    date: new Date("2025-02-01"),
    category: "Groceries",
  },
  {
    id: 4,
    name: "Bread",
    price: 150,
    date: new Date("2025-02-01"),
    category: "Groceries",
  },
  {
    id: 5,
    name: "Soap",
    price: 150,
    date: new Date("2025-03-01"),
    category: "Groceries",
  },
  {
    id: 6,
    name: "Pasta",
    price: 150,
    date: new Date("2025-03-01"),
    category: "Groceries",
  },
  {
    id: 7,
    name: "Tomatoes",
    price: 150,
    date: new Date("2025-04-01"),
    category: "Groceries",
  },
  {
    id: 8,
    name: "Car Service",
    price: 150,
    date: new Date("2025-04-01"),
    category: "Services",
  },
  {
    id: 9,
    name: "House Cleaning",
    price: 150,
    date: new Date("2025-05-01"),
    category: "Services",
  },
  {
    id: 10,
    name: "Car Parking",
    price: 150,
    date: new Date("2025-05-01"),
    category: "Services",
  },
  {
    id: 11,
    name: "Car Cleaning",
    price: 150,
    date: new Date("2025-06-01"),
    category: "Services",
  },
  {
    id: 12,
    name: "Car Refuel",
    price: 300,
    date: new Date("2025-06-01"),
    category: "Services",
  },
  {
    id: 13,
    name: "Cinema",
    price: 100,
    date: new Date("2025-06-01"),
    category: "Entertainment",
  },
  {
    id: 14,
    name: "Park Attraction",
    price: 100,
    date: new Date("2025-07-01"),
    category: "Entertainment",
  },
  {
    id: 15,
    name: "Dining out",
    price: 100,
    date: new Date("2025-07-01"),
    category: "Entertainment",
  },
];
