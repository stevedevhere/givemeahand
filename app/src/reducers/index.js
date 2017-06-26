import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import questions from './questions';
import messages from './questions';

let reducers = combineReducers({
  questions,
  messages,
  // routing: routerReducer
})

export default reducers;
