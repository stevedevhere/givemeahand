export default function questions(state = [{id: 1, title: 'Dors', text: 'Nobody can do this better'}], action) {
  switch (action.type) {
  case "ADD_QUESTION":
    console.log('ACTION! ADD_QUESTION: ', [...state, action.state]);
    return [...state, {...action.state, id: Math.round(Math.random()*1000+100) }];
  default:
    return state;
  }

};
