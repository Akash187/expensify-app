//for working of react-dates
import 'react-dates/initialize';
import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';


describe("<ExpenseDashboardPage /> Component", () => {
  test('should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage/>);
    expect(wrapper).toMatchSnapshot();
  });
});