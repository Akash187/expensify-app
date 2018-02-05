//Filter Reducer
const filterReducerDefaultState = {
  text: '',
  sortedBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filterReducer = (state =filterReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text};
    case 'SORT_BY_DATE':
      return {...state, sortedBy: 'date'};
    case 'SORT_BY_AMOUNT':
      return {...state, sortedBy: 'amount'};
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate};
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate};
    default:
      return state;
  }
};

export default filterReducer;