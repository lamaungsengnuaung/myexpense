<<<<<<< HEAD
import "./ExpenseDate.css";
// props from App.js
// console.log(new Date(null));

const ExpenseDate = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  // console.log(month);
  // console.log(year);
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day} </div>
    </div>
  );
};
export default ExpenseDate;
=======
import "./ExpenseDate.css";
// props from App.js
// console.log(new Date(null));

const ExpenseDate = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  // console.log(month);
  // console.log(year);
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day} </div>
    </div>
  );
};
export default ExpenseDate;
>>>>>>> d4421b9f03577bb0e9db9493720eff963e43bc51
