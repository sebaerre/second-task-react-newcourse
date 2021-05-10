import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {

    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

   const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });


    const titleChangeHandler = (event) => {
        setUserInput((prevState)=> {
            return {
                ...prevState,
                enteredTitle: event.target.value
            }
        });
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState)=> {
            return {
                ...prevState,
                enteredAmount: event.target.value
            }
        });
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState)=> {
            return {
                ...prevState,
                enteredDate: event.target.value
            }
        });
    }

    const submitForm = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: userInput.enteredDate
        };
        setUserInput({
            enteredAmount: '',
            enteredTitle: '',
            enteredDate: ''
        });
        props.onSaveExpenseData(expenseData);
       // console.log(expenseData);
    }

    return (
        <form onSubmit={submitForm}>
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={userInput.enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={userInput.tetenteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;