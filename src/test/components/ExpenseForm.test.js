//for working of react-dates
import 'react-dates/initialize';
import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

describe("<ExpenseForm /> Component", () => {
  test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render ExpenseForm correctly with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});