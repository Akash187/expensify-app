import {createStore} from 'redux';

//Action generators - functions that return action objects
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const store = createStore((state = {count: 0}, action) => {
  switch (action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return{
        count: 0
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//Actions - than an object that gets sent to the store
//increment, decrement and reset

//I'd like to increment the count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}));

//unsubscribe();

//I'd like to decrement the count
// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });

store.dispatch(decrementCount({decrementBy: 15}));

//I'd like to reset the count
// store.dispatch({
//   type: 'RESET'
// });

store.dispatch(resetCount());

console.log('101');
