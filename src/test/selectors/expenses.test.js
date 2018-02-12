import getVisibleExpenses from '../../selectors/expenses';
import moment from "moment";
import expenses from '../fixtures/expenses';

describe('Expenses Selector', () => {
  test('should filter by text value',() => {
    const filters = {
      text: 'e',
      sortedBy: 'date',
      startDate: undefined,
      endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[0],expenses[1]])
  });

  test('should filter by startDate',() => {
    const filters = {
      text: '',
      sortedBy: 'date',
      startDate: moment(0),
      endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[0]])
  });

  test('should filter by endDate',() => {
    const filters = {
      text: '',
      sortedBy: 'date',
      startDate: moment(0),
      endDate: moment().add(4, 'days')
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[0]])
  });

  test('should sort by date',() => {
    const filters = {
      text: '',
      sortedBy: 'date',
      startDate: undefined,
      endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
  });

  test('should sort by amount',() => {
    const filters = {
      text: '',
      sortedBy: 'amount',
      startDate: undefined,
      endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[0],expenses[1],expenses[2]])
  });
});