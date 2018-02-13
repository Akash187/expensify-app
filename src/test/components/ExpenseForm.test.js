//for working of react-dates
import 'react-dates/initialize';
import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import ExpenseListItem from "../../components/ExpenseListItem";

describe("<ExpenseForm /> Component", () => {
  test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render ExpenseForm correctly with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect((wrapper).state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
  });

  test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
      target: {value: "New Description"}
    });
    expect(wrapper.state('description')).toBe("New Description");
    expect(wrapper).toMatchSnapshot();
  });

  test('should set note on textarea change', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
      target: {value: "New Note"}
    });
    expect(wrapper.state('note')).toBe("New Note");
    expect(wrapper).toMatchSnapshot();
  });

  test('should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
      target: {value: "23.50"}
    });
    expect(wrapper.state('amount')).toBe("23.50");
    expect(wrapper).toMatchSnapshot();
  });

  test('should not set if amount is invalid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
      target: {value: "12.122"}
    });
    expect(wrapper.state('amount')).toBe("");
    expect(wrapper).toMatchSnapshot();
  });

  test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onExpenseSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      description: "January Rent",
      note: expenses[0].note,
      amount: expenses[0].amount/100,
      createdAt: expenses[0].createdAt
    });
  });

  test('should set new date on date change', () => {
    const now = moment();
    //console.log(now);
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
  });
});