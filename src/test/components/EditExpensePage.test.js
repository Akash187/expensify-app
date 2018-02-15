import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, deleteExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  deleteExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper = shallow(<EditExpensePage editExpense={editExpense} deleteExpense={deleteExpense} history={history} expense={expenses[2]}/>);
});

describe('</EditExpensePage> Component', () => {

  test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onExpenseSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
  });

  test('should handle deleteExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(deleteExpense).toHaveBeenLastCalledWith({
      id: expenses[2].id
    });
  });

});