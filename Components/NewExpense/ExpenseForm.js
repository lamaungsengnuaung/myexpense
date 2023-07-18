import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const initialState = {
    title: "",
    amount: "",
    date: "",
  };
  const [userInput, setUserInput] = useState(initialState);
  const titleHandler = (event) => {
    // console.log(event);
    setUserInput({ ...userInput, title: event.target.value });
  };
  const amountHandler = (event) => {
    //    console.log(event.target.value);
    setUserInput({ ...userInput, amount: event.target.value });
  };
  const dateHandler = (event) => {
    //    console.log(event.target.value);
    setUserInput({ ...userInput, date: event.target.value });
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(userInput);
    props.onSaveExpenseData(userInput);
    setUserInput(initialState);
  };

  return (
    <form className="form-control" onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.amount}
            onChange={amountHandler}
            min="0.01"
            step="0.01"
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.date}
            onChange={dateHandler}
            min="2019-01-01"
            max="2023-12-31"
          ></input>
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
