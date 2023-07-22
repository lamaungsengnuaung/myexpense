import Card from "../Card/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import "./Expense.css";
import { useState } from "react";
import Expenselist from "./ExpenseList";

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("");
  const filterChangeHandler = (event) => {
    setFilterYear(event);
  };
  const Expenses = props.expenses;
  // console.log(Expenses);

  const filterExpense =
    filterYear === ""
      ? Expenses
      : Expenses.filter(
          (expense) => expense.date.getFullYear() === Number(filterYear)
        );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filterExpense} />
      <Expenselist expenses={filterExpense} />
    </Card>
  );
  // boo ? props.expenses[0] :
  // // JSX Under the Hood
  // return React.createElement(
  //   "div",
  //   { class: "expenses" },
  //   React.createElement("h2", {}, "let get start").React.createElement("div", {
  //     title: expenses[1].title,
  //   })
  // );
};
export default Expense;
