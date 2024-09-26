// src/redux/actions.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';

export const addExpense = (expense) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}/expenses`, expense);
    dispatch({ type: 'ADD_EXPENSE', payload: response.data });
  } catch (error) {
    // Handle error
  }
};

export const fetchExpenses = () => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/expenses`);
    dispatch({ type: 'FETCH_EXPENSES', payload: response.data });
  } catch (error) {
    // Handle error
  }
};

export const deleteExpense = (expenseId) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}/expenses/${expenseId}`);
    dispatch({ type: 'DELETE_EXPENSE', payload: expenseId });
  } catch (error) {
    // Handle error
  }
};
