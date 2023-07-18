import Card from "../Card/Card";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (expense) => {
  // const [newExpense, setExpense] = useState(expense);

  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div>
        <ExpenseTitle title={expense.title} />
        <ExpenseAmount amount={expense.amount} />
      </div>
    </Card>
  );
};

export default ExpenseItem;
