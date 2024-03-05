import { createStore } from "redux";

//state is created
let initailCounter = {
  count: 0,
};

//
// this will create a centralized store
// the createStore can takes reducer function as callback
const store = createStore(reducer); // this is old methods

function reducer(state=initailCounter, action) {
  switch (action.type) {
    case "Increment":
      return { ...state, count: state?.count + 1 };
    case "Decrement":
      return { ...state, count: state?.count - 1 };
    case "DecrementBY10":
      return { ...state, count: state?.count - action.payload };
    case "IncrementBY10":
      return { ...state, count: state?.count + action.payload };
    default:
      return state;
  }
}
console.log(store);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "Increment" });
store.dispatch({ type: "Decrement" });
store.dispatch({ type: "DecrementBY10" ,payload: 10});
store.dispatch({ type: "IncrementBY10" ,payload: 10});
store.dispatch({ type: "IncrementBY10" ,payload: 10});
store.dispatch({ type: "IncrementBY10" ,payload: 10});

