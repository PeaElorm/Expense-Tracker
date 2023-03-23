import ExpenseDate from "./expenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  
  return (
    <Card className="expense-item">
      {/* <div className="expense-item__description">{props.date.toISOString()}</div>  */}
      <ExpenseDate date={props.date}/>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
