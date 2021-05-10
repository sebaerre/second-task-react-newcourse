import ExpenseItem from './ExpenseItem';
import { useState } from 'react';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import './Expenses.css';
import Card from '../UI/Card';

const Expenses = (props) => {

  const [dateFilter, setDateFilter] = useState('2019');

  const setDateFilterHandler = (event) => {
    setDateFilter(event.target.value);
  }

  return (
    <div>
      <ExpensesFilter onDateChange={setDateFilterHandler} />
      <Card className="expenses">
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  )
}

export default Expenses;