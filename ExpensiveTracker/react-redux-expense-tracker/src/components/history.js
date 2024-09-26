import React from "react";
import { connect, useSelector } from "react-redux";
import "../styles.css";

const Abc = (props) => {
  const data = useSelector((store) => store.nameReducer.lisst);
  console.log("data", data);
  const renderDataItems = data.map((e) => {
    console.log("now", typeof Number(e.Amount));
    const pluss = "plus";
    const minuss = "minus";
    return (
      <li key={e.Expense} className={Number(e.Amount) > 0 ? pluss : minuss}>
        {e.Expense}
        <span>{e.Amount}</span>
        {/* <span>
          <button className="delbtn">
            <b>X</b>
          </button>
        </span> */}
      </li>
    );
  });
  return (
    <div>
      <ol className="list">{renderDataItems}</ol>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state: state.statte };
};

const a = connect(mapStateToProps)(Abc);
export default a;
