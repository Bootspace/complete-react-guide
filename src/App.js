import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2024, 11, 16)
  },
  
  {
    id: 'e2',
    title: 'New TV',
    amount: 287.76,
    date: new Date(2024, 11, 16)
  },

  {
    id: 'e3',
    title: 'Macbook',
    amount: 700,
    date: new Date(2024, 11, 16)
  },

  {
    id: 'e4',
    title: 'Airforce 1',
    amount: 100,
    date: new Date(2024, 11, 16)
  }
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
