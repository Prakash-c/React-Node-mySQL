import React from 'react';
import { useSelector } from 'react-redux';

function ExpenseList() {
  const expenses = useSelector(state => state.expenses);

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>{expense.description}: ${expense.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;