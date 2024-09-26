import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ExpenseList from './ExpenseList'; // Example component

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ExpenseList />
      </div>
    </Provider>
  );
}

export default App;