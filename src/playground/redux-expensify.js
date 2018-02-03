import {createStore, combineReducers} from 'redux';

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