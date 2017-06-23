import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import questions from './questions';

let reducers = combineReducers({
  questions,
  routing: routerReducer
})

export default reducers;
