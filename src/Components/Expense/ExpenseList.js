import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
const Expenselist = (props) => {
  const filterExpense = props.expenses;
  let expenseContent =
    filterExpense.length === 0 ? (
      <h2 className="expenses-list__fallback">No Item Here.</h2>
    ) : (
      filterExpense.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={"$" + expense.amount}
          date={expense.date}
        />
      ))
    );

  return <ul className="expense-list">{expenseContent}</ul>;
};
export default Expenselist;
