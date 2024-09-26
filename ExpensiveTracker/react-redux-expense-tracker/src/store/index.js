import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
const initialState = { income: 0, expense: 0, lisst: [] };
export const nameReducer = (state = initialState, action) => {
  if (action.type === "inc") {
    return {
      income: state.income + 1,
      expense: state.expense,
      lisst: state.lisst
    };
  }
  if (action.type === "dec") {
    return {
      expense: state.expense + 1,
      income: state.income,
      lisst: state.lisst
    };
  }
  if (action.type === "add") {
    return {
      ...state,
      lisst: [...state.lisst, action.data],
      expense: state.expense,
      income: state.income
    };
  }
  return state;
};

export default combineReducers({
  form: formReducer,
  nameReducer: nameReducer
});
