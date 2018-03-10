import filterReducer from '../../reducers/filters';
import moment from 'moment';

describe('Filters Reducer', () => {
  test('should be able to add default state', () => {
    const filterReducerDefaultState = {
      text: '',
      sortedBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    };

    const result = filterReducer(undefined, '');
    expect(result).toEqual(filterReducerDefaultState);
  });

  test('should set sort by to amount', () => {
    const result = filterReducer(undefined, {type: "SORT_BY_AMOUNT"});
    expect(result.sortedBy).toEqual('amount');
  });

  test('should set sort by to date', () => {
    const result = filterReducer(undefined, {type: "SORT_BY_DATE"});
    expect(result.sortedBy).toEqual('date');
  });

  test('should set text filter', () => {
    const result = filterReducer(undefined, {type: "SET_TEXT_FILTER", text: "Rent"});
    expect(result.text).toEqual('Rent');
  });

  test('should set start date filter', () => {
    const result = filterReducer(undefined, {type: "SET_START_DATE", startDate: moment(0)});
    expect(result.startDate).toEqual(moment(0));
  });

  test('should set end date filter', () => {
    const result = filterReducer(undefined, {type: "SET_END_DATE", endDate: moment(0)});
    expect(result.endDate).toEqual(moment(0));
  });
});