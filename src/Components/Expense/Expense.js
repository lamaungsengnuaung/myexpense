import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expense.css";
import { useState } from "react";

const Expense = (props) => {
  // first
  // const initialExpenses = props.expenses;
  // console.log(initialExpenses);
  // const [expenses, setfilteredExpense] = useState(initialExpenses);
  // // const [year, setFilterYear] = useState("");
  // console.log(expenses);
  // const filterbyYearHandler = (yearProp) => {
  //   // setFilterYear(yearProp);
  //   const filterbyYearExpenses =
  //     yearProp === ""
  //       ? initialExpenses
  //       : initialExpenses.filter(
  //           (expense) => expense.date.getFullYear() === Number(yearProp)
  //         );
  //   setfilteredExpense(filterbyYearExpenses);
  // };

  // const [expenses, setFilterExpense] = useState(props.expenses);
  // expenses = props.expenses;
  // const constructor = (props) => {
  //   setFilterExpense(props);
  // };
  // console.log(constructor);
  // console.log(expenses);

  // const expenses = props.expenses;
  const UPDATE_EXP = props.expenses;
  console.log(UPDATE_EXP, "FIRST");
  const getYear = props.expenses;
  const [VAR_EXP, setExpense] = useState(UPDATE_EXP);

  const setData = (exp) => {
    console.log(exp, "last");
    setExpense(exp);
  };
  console.log(setData, VAR_EXP);
  // console.log(VAR_EXP, "behind");

  return (
    <Card className="expenses">
      <ExpenseFilter setFilter={getYear} getData={setData} />
      {VAR_EXP.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={"$" + expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );

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
