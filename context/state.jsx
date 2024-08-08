import { createContext, useState } from "react";

export const StateContext = createContext({
  transactions: [],
  addTransaction: () => {},
});

export function StateProvider({ children }) {
  const [transactions, setTransactions] = useState([
    {
      date: "2024-08-02",
      category: "Groceries",
      amount: "150.00",
      remark: "Weekly supermarket shopping",
    },
    {
      date: "2024-08-03",
      category: "Dining",
      amount: "45.00",
      remark: "Dinner at Italian restaurant",
    },
    {
      date: "2024-08-03",
      category: "Transportation",
      amount: "30.00",
      remark: "Monthly metro card top-up",
    },
    {
      date: "2024-08-04",
      category: "Utilities",
      amount: "75.00",
      remark: "Electricity and water bill",
    },
    {
      date: "2024-08-05",
      category: "Groceries",
      amount: "50.00",
      remark: "Supermarket shopping",
    },
    {
      date: "2024-08-05",
      category: "Dining",
      amount: "10.00",
      remark: "Dinner at canteen",
    },
    {
      date: "2024-08-06",
      category: "Transportation",
      amount: "5.00",
      remark: "Bus ride",
    },
    {
      date: "2024-08-08",
      category: "Utilities",
      amount: "15.00",
      remark: "Gas bill",
    },
  ]);

  const handleAddTransaction = (tx) => {
    setTransactions([...transactions, tx]);
  };

  return (
    <StateContext.Provider
      value={{ transactions, addTransaction: handleAddTransaction }}
    >
      {children}
    </StateContext.Provider>
  );
}
