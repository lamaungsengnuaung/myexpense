import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (newExpenseData) => {
    // console.log(newExpenseData);
    // first
    // const newExpenseObj = {
    //   ...newExpenseData,
    //   date: new Date(newExpenseData.date),
    //   id: Math.trunc(Math.random() * 10).toString(),
    // };
    // console.log(newExpenseObj);
    // // props.onAddExpense(newExpenseObj);
    const newExpense = {
      ...newExpenseData,
      date: new Date(newExpenseData.date),
      id: Math.trunc(Math.random() * 10).toString(),
    };
    props.onAddExpense(newExpense);
    // console.log(newExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
