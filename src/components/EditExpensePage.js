import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {deleteExpenses, editExpense} from "../actions/expenses";

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onExpenseSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id,expense));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(deleteExpenses({id: props.expense.id}));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) =>
      expense.id === props.match.params.id
    )
  }
};

export default connect(mapStateToProps)(EditExpensePage);