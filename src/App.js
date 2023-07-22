// import React, { useCallback } from "react";
import { useState } from "react";
import Expense from "./Components/Expense/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";
function App() {
  // console.log(props);
  const initialExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 4),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  // Header toggle
  const [allow, setAllow] = useState(false);
  const toggleListHandler = () => {
    setAllow((allow) => !allow);
  };
  const display = allow ? "none" : "block";
  // End Header toggle
  const [updatedExpense, setExpense] = useState(initialExpenses);
  const onAddExpense = (props) => {
    const addingExpense = [props, ...updatedExpense];
    setExpense(addingExpense);
    // console.log(updatedExpense); // ...pending state
  };
  // console.log(updatedExpense);
  return (
    <div className="expenses">
      <div className="expenses">
        <h1 style={{ display, color: "white", textAlign: "center" }}>
          My Expense List
        </h1>
        <button
          style={{ float: "right" }}
          onClick={toggleListHandler}
          className="expense-item__price"
        >
          {allow ? "😀Show" : "😣Close"}
        </button>
      </div>
      <div className="expenses">
        <NewExpense onAddExpense={onAddExpense} />
        <Expense expenses={updatedExpense} />
      </div>
    </div>
  );
  // JSX UNDER THE HOOD
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h", {}, "My Expenses App").React.createElement("div", {
  //     expenses: expenses,
  //   })
  // );
}

export default App;
//  return (
//    <div className="app">
//      <h1>Hi There</h1>

//      <button>Toggle Btn</button>
//    </div>
//  );
