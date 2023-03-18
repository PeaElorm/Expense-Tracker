import './ExpenseItem.css';

function ExpenseItem(props) {
    
    return (
      <div className="expense-item">
        <div className="expense-item__description">{props.date.toISOString()}</div>
        <div>
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    );
}

export default ExpenseItem;