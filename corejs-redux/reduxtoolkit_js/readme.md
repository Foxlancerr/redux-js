# requirements

- redux-toolkit
- parceljs

## How i setup the file

1. npm init -y
2. npm install @reduxjs/toolkit
3. npm install --save-dev parcel

- parcel is require because pure html not configure the redux or any dependencies

4. set type of js file into module

```html
<script src="./index.js" type="module"></script>
```

5. then import the redux or follow documentation

```js
import { createStore } from "redux";

//state is created
let initailCounter = {
  count: 0,
};

// this will create a centralized store
// the createStore can takes reducer function as callback
const store = createStore(reducer);

function reducer(state = initailCounter, action) {
  switch (action.type) {
    case "Increment":
      return { ...state, count: state?.count + 1 };
    case "Decrement":
      return { ...state, count: state?.count - 1 };
    default:
      return state;
  }
}
console.log(store);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "Increment" });
store.dispatch({ type: "Increment" });
store.dispatch({ type: "Increment" });
store.dispatch({ type: "Increment" });
store.dispatch({ type: "Decrement" });
store.dispatch({ type: "Decrement" });
store.dispatch({ type: "Decrement" });
store.dispatch({ type: "Decrement" });
store.dispatch({ type: "Decrement" });
store.dispatch({ type: "Increment" });
store.dispatch({ type: "Increment" });
store.dispatch({ type: "Increment" });
store.dispatch({ type: "Increment" });
```
