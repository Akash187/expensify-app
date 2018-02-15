import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpenses} from "../actions/expenses";

export class AddExpensePage extends React.Component{

  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Add Expenses</h1>
        <ExpenseForm
          onExpenseSubmit={this.onSubmit}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpenses(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);