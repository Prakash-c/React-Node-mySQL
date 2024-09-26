// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import expenseReducer from './reducers';

const store = createStore(expenseReducer, applyMiddleware(thunk));

export default store;
