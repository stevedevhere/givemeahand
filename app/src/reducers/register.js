export default function register(state = [], action) {
  switch (action.type) {
  case "SUBMIT_REGISTER":
    console.log('action', action);
    console.log('ACTION! SUBMIT_REGISTER:', [...state, {...action.data}]);
    return [...state, {...action.data }];
  default:
    return state;
  }

};
