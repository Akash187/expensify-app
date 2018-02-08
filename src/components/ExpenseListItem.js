//Export a stateless functional component
//description, amount, createdAt
import React from 'react';
import {connect} from "react-redux";
import {deleteExpenses} from "../actions/expenses";

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => dispatch(deleteExpenses({id}))}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);