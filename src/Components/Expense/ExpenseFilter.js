// import { useState } from "react";
// import { useState } from "react";
import { useState } from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  // const [expenses, setExp] = useState(props.setFilter);

  const dropdownFitlerHandler = (e) => {
    const year = e.target.value;
    console.log(year);
    const filterExp = (expenses = props.setFilter) =>
      year === ""
        ? expenses
        : expenses.filter(
            (expense) => expense.date.getFullYear() === Number(year)
          );

    // setExp(filterExp());
    props.getData(filterExp());
  };

  // console.log(props.expenses[0], "from Expense.js");

  // props.expenseFilter(year);
  // const filterExp = props.expenseData.filter(
  //   (expense) => expense.date.getFullYear() === Number(year)
  // );
  // console.log(filterExp);
  // props.onsetExpense(filterExp);

  return (
    <div className=" expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter Year</label>
        <select className="form-select" onChange={dropdownFitlerHandler}>
          <option value="">Any Year</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
