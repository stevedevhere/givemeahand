export default function questions(state = [{id: 1, titile: 'Dors', text: 'Nobody can do this better'}], action) {
  console.log(state, action);
  switch (action.type) {
  case "ADD_QUESTION":
    console.log('ACTION! ADD_QUESTION: ', [...state, action.state]);
    return [...state, action.state];
  default:
    return state;
  }

};
