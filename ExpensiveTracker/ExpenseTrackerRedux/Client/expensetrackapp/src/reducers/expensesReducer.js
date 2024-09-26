const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload];
    // ... other cases for updating expenses
    default:
      return state;
  }
};
export default expensesReducer;