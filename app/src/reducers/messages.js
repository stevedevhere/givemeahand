export default function messages(state = [{t:'t'},], action) {
  console.log(state, action);

  switch (action.type) {
  case "ADD_MESSAGE":
    console.log('ACTION! ADD_MESSAGE: ', [...state, action.state]);
    return [...state, { ...action.state }];

  default:
    return state;
  }

};
