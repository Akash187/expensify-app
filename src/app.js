//install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/main.scss';
import 'react-dates/lib/css/_datepicker.css';
//file below override some style provided by default in react-dates module
import './styles/DatePicker_Style.css';
import configureStore from './store/configureStore';
import {addExpenses} from './actions/expenses';

import getVisibleExpenses from './selectors/expenses';

const store = configureStore();
console.log('Test');

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

store.dispatch(addExpenses({description: 'Water bill', amount: 30000}));
store.dispatch(addExpenses({description: 'Gas bill', createdAt: 10000}));
store.dispatch(addExpenses({description: 'Rent', amount: 125000}));

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));