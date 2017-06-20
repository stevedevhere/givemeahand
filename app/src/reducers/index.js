import { combineReducers } from 'redux';
import questions from './questions';

let reducers = combineReducers({
  questions,
})

export default reducers;
