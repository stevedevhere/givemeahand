export default function questions(state = {}, action) {
  console.log(action);
  switch (action.type) {
  case "ADD_QUESTION":
    console.log('yoyoyo');
    return {...state}
  default:
    return state;
  }

};
