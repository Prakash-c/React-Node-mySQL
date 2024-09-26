// src/components/ExpenseList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenses, deleteExpense } from '../redux/actions';

const ExpenseList = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  const handleDelete = (expenseId) => {
    dispatch(deleteExpense(expenseId));
  };

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description} - {expense.amount}
            {/* <button onClick={() => handleDelete(expense.id)}>Delete</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
