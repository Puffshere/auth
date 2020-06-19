// import * as types from '../actions';

// const ADD_KNIFE = 'ADD_KNIFE';

// export default function(state = 'You have no knives!  Go buy some!', action) {

//   const knifeReducer = action.knifeReducer;
  
//   console.log(state);
//   switch(action.type) {
//     case types.ADD_KNIFE:
//       return { ...state, knifeReducer };
//     default:
//       return state;
//   }
// };
// const addKnifeText = knife => {

//  return {
//    type: ADD_KNIFE,
//    text: knife
//  };

// };

// store.dispatch(addKnifeText("Hello!"));


// const knifeReducer = (state = "You have no knives!  Go buy some now!", action) => {
//  switch (action.type) {

//    case ADD_KNIFE:
//      return action.text;

//    default:
//      return state;
//  }
// };


// const store = Redux.createStore(knifeReducer);
// console.log(store.getState());
