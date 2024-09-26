// src/App.js
import React from 'react';
import ExpenseForm from './redux/ExpenseForm';
import ExpenseList from './redux/ExpenseList';

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      {/* <ExpenseForm /> */}
      <ExpenseList />
    </div>
  );
}

export default App;
