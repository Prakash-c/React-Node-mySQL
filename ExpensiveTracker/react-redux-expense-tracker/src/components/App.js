import React from "react";
import Top from "./top";
import Form from "./form";
import History from "./history";
import { useDispatch } from "react-redux";
import "../styles.css";
const App = () => {
  const dispatch = useDispatch();
  const formSubmit = (e) => {
    console.log("formsubmit", e);
    dispatch({ type: "add", data: e });
  };
  return (
    <div className="ui container grid">
      <div className="ol">
        <h2>Expense Tracker</h2>
        <div>
          <Top />
        </div>
        <h4>History</h4>
        <History />
        <h4>Add New Transaction</h4>
        <Form onSubmit={formSubmit} />
      </div>
    </div>
  );
};

export default App;
