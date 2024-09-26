import { Field, reduxForm } from "redux-form";
import React from "react";
import "../styles.css";
// Validation---------------------------------
const validate = (values) => {
  const errors = {};
  if (!values.Expense) {
    errors.Expense = "Required";
  } else if (values.Expense.length < 2) {
    errors.Expense = "Minimum be 2 characters or more";
  }
  if (!values.Amount) {
    errors.Amount = "Required";
  }
  return errors;
};
const renderField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <div className="form-control">
    <input {...input} type={type} placeholder={placeholder} />
    {touched &&
      ((error && (
        <span className="text-danger" style={{ color: "red", fontSize: "1" }}>
          {error}
        </span>
      )) ||
        (warning && <span>{warning}</span>))}
  </div>
);
// -------------------------------------------
function Form(props) {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Expense / Income</label>
        <Field
          name="Expense"
          component={renderField}
          type="text"
          placeholder="Expense/Income Name.."
        />
      </div>
      <div className="form-control">
        <label>Enter Amount</label>
        <Field
          name="Amount"
          component={renderField}
          type="number"
          placeholder="amount in Rs"
        />
      </div>
      <button className="btn" type="submit" disabled={pristine || submitting}>
        Add New Transaction
      </button>
    </form>
  );
}
export default reduxForm({
  form: "Form",
  validate
})(Form);
