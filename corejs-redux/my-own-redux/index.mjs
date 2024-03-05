import createStore from "./my-redux.mjs";

const myStore = createStore(reducer);

console.log(myStore);
const initialState = {
  counter: 0,
};

function reducer(state = initialState, action) {
  switch (action?.type) {
    case "decrement":
      return { counter: state.counter - action.payload };
    case "increment":
      return { counter: state.counter + action.payload};
    default:
      return state;
  }
}

myStore.subscribe(() => {
  console.log(myStore.getState());
});

myStore.dispatch();
myStore.dispatch({ type: "increment", payload: 20});
myStore.dispatch({ type: "increment", payload: 20});
myStore.dispatch({ type: "increment", payload: 20});
myStore.dispatch({ type: "decrement", payload: 10});
myStore.dispatch({ type: "decrement", payload: 10});

