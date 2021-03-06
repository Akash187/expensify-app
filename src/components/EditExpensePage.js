import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {deleteExpenses, editExpense} from "../actions/expenses";

export class EditExpensePage extends React.Component{

  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id,expense);
    this.props.history.push('/');
  };

  onDelete = () => {
    this.props.deleteExpense({id: this.props.expense.id});
    this.props.history.push('/');
  };

  render(){
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onExpenseSubmit={this.onSubmit}
        />
        <button onClick={this.onDelete}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) =>
      expense.id === props.match.params.id
    )
  }
};

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id,expense) => dispatch(editExpense(id, expense)),
  deleteExpense: (id) => dispatch(deleteExpenses(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);