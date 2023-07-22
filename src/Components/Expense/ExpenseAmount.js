import "./ExpenseItem.css";

const ExpenseAmount = (props) => {
  const amount = props.amount;
  return <div className="expense-item__price">{amount}</div>;
};
export default ExpenseAmount;
