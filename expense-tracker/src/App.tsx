import { useState } from "react";
import ExpenseForm from "./ExpenseForm"
import ExpenseList from "./ExpenseList"
import ExpenseFilter from "./ExpenseFilter"

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, amount: 10, description: 'Milk', category: 'Groceries' },
    { id: 2, amount: 23, description: 'Backpack', category: 'Utilities' },
    { id: 3, amount: 30, description: 'Beans', category: 'Groceries' },
    { id: 4, amount: 40, description: 'Cable', category: 'Electronics' },
  ]);
  const visibleExpenses = selectedCategory ? expenses.filter(expense => expense.category === selectedCategory) : expenses;


  return (
    <>
      <ExpenseForm onSubmit={(data) => setExpenses([...expenses, { ...data, id: expenses.length + 1 }])} />
      <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)} />
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(expense => expense.id !== id))} />
    </>
  )
}

export default App
