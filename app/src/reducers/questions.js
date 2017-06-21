export default function questions(state = [], action) {
  console.log(action);
  switch (action.type) {
  case "ADD_QUESTION":
    // console.log(state);
    return [...state, action.state];
  default:
    return state;
  }

};
