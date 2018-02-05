



const expenseOne =
const expenseTwo = store.dispatch(addExpenses({description: 'Coffee in a 5 star hotel', amount: 3000, createdAt: 1000}));

// store.dispatch(deleteExpenses({ id : expenseOne.expense.id}));
// store.dispatch(editExpense({ id: expenseTwo.expense.id}, {amount : 500}));
//
//store.dispatch(setTextFilter('rent'));
//store.dispatch(sortByDate());
store.dispatch(sortByAmount());
//store.dispatch(setStartDate(1230));
//store.dispatch(setEndDate(-250));


const demostate = {
  expenses: [{
    id: 'fgdflkewjglkmio',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filter: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};

//Spreading Objects
const user = {
  name: 'Jen',
  age: 24
};

console.log({
  age: 27,
  ...user,
  location: "Philedelphia"
});