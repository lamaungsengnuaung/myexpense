import "./ExpenseItem.css";
const ExpenseTitle = (props) => {
  const title = props.title;
  return <h2 className="expense-item__description">{title}</h2>;
};

export default ExpenseTitle;
