import React from 'react';
import {connect} from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>ExpenseList</h1>
    {props.filter.text}
    {props.expenses[0].id}
  </div>
);

const mapStateToProps = (state) => {
  return{
    expenses: state.expenses,
    filter: state.filters
  }
};

export default connect(mapStateToProps)(ExpenseList);

//old format
// const ConnectedExpenseList = connect((state) => {
//   return{
//     expenses: state.expenses
//   }
// })(ExpenseList);
//
// export default ConnectedExpenseList;