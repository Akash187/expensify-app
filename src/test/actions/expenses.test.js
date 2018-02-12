import {addExpenses, editExpense, deleteExpenses} from '../../actions/expenses';

describe('Expenses Actions', () => {
  test('should setup delete expense action object',() => {
    const action = deleteExpenses({id: '123abc'});
    expect(action).toEqual({type: 'REMOVE_EXPENSE', id:'123abc'});
  });

  test('should setup edit expense action object',() => {
    const action = editExpense({id:'123abc'},{note: 'New note value'});
    expect(action).toEqual({type: 'EDIT_EXPENSE', id:'123abc', update : {note: 'New note value'}});
  });

  test('should setup add expense action object',() => {
    const expenseData = {
      description: 'Rent',
      amount: 109500,
      createdAt: 1000,
      note: 'This was last months rent'
    };
    const action = addExpenses(expenseData);
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        ...expenseData,
        id: expect.any(String)
      }
    });
  });

  test('should setup add expense action object with default values',() => {
    const defaultExpenseData = {
      description: '',
      amount: 0,
      createdAt: 0,
      note: ''
    };

    const action = addExpenses();
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultExpenseData
      }
    });
  });
});