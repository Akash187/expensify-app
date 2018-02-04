import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE
const addExpenses = ({description = '', note = '', amount = 0, createdAt = 0} = {}) =>({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//REMOVE_EXPENSE
const deleteExpenses = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
      //ES6 Spread Operator is used
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id
        );
    default:
      return state;
  }
};

//Filter Reducer
const filterReducerDefaultState = {
  text: '',
  sortedBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filterReducer = (state =filterReducerDefaultState, action) => {
  switch(action.type){
    default:
      return state;
  }
};

//Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpenses({description: 'Rent', amount: 1000}));
const expenseTwo = store.dispatch(addExpenses({description: 'Coffee', amount: 3000}));

store.dispatch(deleteExpenses({ id : expenseOne.expense.id}));

const demostate = {
  expenses: [{
    id: 'fgdflkewjglkmio',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filter: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};