// import store from '../store';
// const dispatch = store.dispatch;

export const addQuestion = state => ({type: 'ADD_QUESTION', state});
export const deleteQuestion = id => ({type: 'DELETE_QUESTION', id});

export const addMessage = state => ({type: 'ADD_MESSAGE', state});
export const deleteMessage = id => ({type: 'EDIT_MESSAGE  ', id});
