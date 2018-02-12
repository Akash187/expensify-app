import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import uuid from 'uuid';

describe('Expenses Reducer', () => {
  test('should be able to set default state', () => {
    const result = expensesReducer(undefined, {type: '@INIT'});
    expect(result).toEqual([]);
  });

  test('should be able to add expenses', () => {
    const testExpense = {
      id: uuid(),
      description: "Electricity Bill",
      amount: 45600
    };

    const result = expensesReducer(expenses, {
      type: 'ADD_EXPENSE',
      expense : testExpense
    });
    expect(result).toEqual([...expenses, {
      id: expect.any(String),
      description: "Electricity Bill",
      amount: 45600
    }]);
  });

  test('should remove expenses by correct id', () => {
    const testId = expenses[0].id;
    const expectedOutput = [expenses[1],expenses[2]];
    const result = expensesReducer(expenses, {type: "REMOVE_EXPENSE", id: testId});
    expect(result).toEqual(expectedOutput);
  });

  test('should remove expenses by wrong id', () => {
    const testId = "123abc";
    const expectedWrongOutput = [expenses[1],expenses[2]];
    const result = expensesReducer(expenses, {type: "REMOVE_EXPENSE", id: testId});
    expect(result).toEqual(expenses);
  });

  test('should be able to edit expenses', () => {
    const testId = expenses[0].id;
    const expectedOutput = [expenses[1],expenses[2]];
    const result = expensesReducer(expenses, {type: "EDIT_EXPENSE", id: testId, update: {
        amount: 34560,
        description: "Home Rent"
      }});
    expect(result[0].amount).toBe(34560);
  });
});