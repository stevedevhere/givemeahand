import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import questions from './questions';
import messages from './messages';
import register from './register';

let reducers = combineReducers({
  questions,
  messages,
  register,
  // routing: routerReducer
})

export default reducers;
