// src/redux/reducers.js
const initialState = {
    expenses: [],
  };
  
  const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EXPENSE':
        return { ...state, expenses: [...state.expenses, action.payload] };
      case 'FETCH_EXPENSES':
        return { ...state, expenses: action.payload };
      case 'DELETE_EXPENSE':
        return {
          ...state,
          expenses: state.expenses.filter((expense) => expense.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default expenseReducer;  