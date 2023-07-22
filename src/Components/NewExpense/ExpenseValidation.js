import "./ExpenseForm.css";
const ExpenseValidation = (props) => {
  const display = props.validation ? "none" : "block";
  return (
    <small style={{ color: "red", display: display }}>This is required.</small>
  );
};
export default ExpenseValidation;
