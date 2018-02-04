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
const editExpense = ({id}, update) =>({
  type: 'EDIT_EXPENSE',
  id,
  update
});

//SET_TEXT_FILTER
const setTextFilter = (text) => ({
  type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

//SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

//SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

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
    case 'EDIT_EXPENSE':
        return state.map((expense) => {
          if(expense.id === action.id){
            return{
              ...expense,
              ...action.update
            };
          }else{
            return expense
          }
        });
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
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text};
    case 'SORT_BY_DATE':
      return {...state, sortedBy: 'date'};
    case 'SORT_BY_AMOUNT':
      return {...state, sortedBy: 'amount'};
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate};
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate};
    default:
      return state;
  }
};

//Get visible expenses
const getVisibleExpenses = (expenses, {text, sortedBy, startDate, endDate}) => {

  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
    if(sortedBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }else if(sortedBy === 'amount'){
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

//Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpenses({description: 'Rent for office', amount: 1000, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpenses({description: 'Coffee in a 5 star hotel', amount: 3000, createdAt: 1000}));

// store.dispatch(deleteExpenses({ id : expenseOne.expense.id}));
// store.dispatch(editExpense({ id: expenseTwo.expense.id}, {amount : 500}));
//
//store.dispatch(setTextFilter('rent'));
//store.dispatch(sortByDate());
store.dispatch(sortByAmount());
//store.dispatch(setStartDate(1230));
//store.dispatch(setEndDate(-250));


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

//Spreading Objects
const user = {
  name: 'Jen',
  age: 24
};

console.log({
  age: 27,
  ...user,
  location: "Philedelphia"
});