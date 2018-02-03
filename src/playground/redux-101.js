import {createStore} from 'redux';

const store = createStore((state = {count: 0}, action) => {
  switch (action.type){
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return{
        count: 0
      };
    default:
      return state;
  }
});

console.log(store.getState());

//Actions - than an object that gets sent to the store
//increment, decrement and reset

//I'd like to increment the count
store.dispatch({
  type: 'INCREMENT'
});

console.log('Increment: ',store.getState());

//I'd like to decrement the count
store.dispatch({
  type: 'DECREMENT'
});

console.log('Decrement: ',store.getState());

//I'd like to reset the count
store.dispatch({
  type: 'RESET'
});

console.log('Reset: ', store.getState());


console.log('101');
