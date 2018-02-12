import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpensesList';
import expenses from '../fixtures/expenses';

describe("<ExpenseList /> Component", () => {
  test('should render ExpenseList correctly', () => {
    const wrapper = shallow(<ExpenseList expenses = {expenses}/>);
    expect(wrapper).toMatchSnapshot();
  });
});