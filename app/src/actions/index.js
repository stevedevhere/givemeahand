import store from '../store';
const dispatch = store.dispatch;

export const addQuestion = (state) => dispatch({type: 'ADD_QUESTION', state});
