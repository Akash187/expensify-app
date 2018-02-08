import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpenses} from "../actions/expenses";

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expenses</h1>
    <ExpenseForm
    onExpenseSubmit={(expense) => {
      props.dispatch(addExpenses(expense));
      props.history.push('/');
    }}/>
  </div>
);

export default connect()(AddExpensePage);