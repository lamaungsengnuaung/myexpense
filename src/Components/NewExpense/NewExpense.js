import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (newExpenseData) => {
    const newExpense = {
      ...newExpenseData,
      date: new Date(newExpenseData.date),
      id: Math.trunc(Math.random() * 10).toString(),
    };

    props.onAddExpense(newExpense);
    console.log(newExpense, "newExpenses");
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
