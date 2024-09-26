import React from "react";
import { connect, useSelector } from "react-redux";
const Top = (props) => {
  const hist = useSelector((store) => store.nameReducer.lisst);
  let incc = 0;
  let decc = 0;
  hist.map((e) => {
    if (Number(e.Amount) > 0) {
      incc = incc + Number(e.Amount);
    } else {
      decc = decc - Number(e.Amount);
    }
    return console.log("hist", e.Expense, Number(e.Amount), incc, decc);
  });
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>Rs {incc - decc}</h1>

      <div className="inc-exp-container">
        <div>
          <h4>INCOME</h4>
          <p className="money plus">+ Rs {incc}</p>
        </div>
        <div>
          <h4>EXPENSE</h4>
          <p className="money minus"> Rs {decc}</p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("a", state);
  return { my: state.myState };
};
export default connect(mapStateToProps)(Top);
