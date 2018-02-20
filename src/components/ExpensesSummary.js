import React from 'react';
import {connect} from 'react-redux';
import {ExpensesTotal} from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
  const visibleExpenses = getVisibleExpenses(props.expenses, {...props.filters});
  const expenseWord = visibleExpenses.length === 1 ? 'expense' : 'expenses';
  return (
  <div>
    <h1>Viewing {visibleExpenses.length} {expenseWord} totalling {numeral(ExpensesTotal(visibleExpenses)).format('$0,0.00')}</h1>
  </div>
  )
};


const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpensesSummary);