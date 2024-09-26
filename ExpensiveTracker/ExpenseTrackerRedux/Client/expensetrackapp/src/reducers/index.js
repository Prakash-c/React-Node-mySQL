import { combineReducers } from 'redux';
import expensesReducer from './expensesReducer';

const rootReducer = combineReducers({
  expenses: expensesReducer,
  // ... other reducers
});

export default rootReducer;