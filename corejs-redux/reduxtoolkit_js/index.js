// import { createStore } from "redux";

// //state is created
// let initailCounter = {
//   count: 0,
// };

// //
// // this will create a centralized store
// // the createStore can takes reducer function as callback
// const store = createStore(reducer); // this is old methods

// function reducer(state=initailCounter, action) {
//   switch (action.type) {
//     case "Increment":
//       return { ...state, count: state?.count + 1 };
//     case "Decrement":
//       return { ...state, count: state?.count - 1 };
//     case "DecrementBY10":
//       return { ...state, count: state?.count - action.payload };
//     case "IncrementBY10":
//       return { ...state, count: state?.count + action.payload };
//     default:
//       return state;
//   }
// }
// console.log(store);
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({ type: "Increment" });
// store.dispatch({ type: "Decrement" });
// store.dispatch({ type: "DecrementBY10" ,payload: 10});
// store.dispatch({ type: "IncrementBY10" ,payload: 10});
// store.dispatch({ type: "IncrementBY10" ,payload: 10});
// store.dispatch({ type: "IncrementBY10" ,payload: 10});



/**
 * @redux_best_practices_followed
 */

import { createStore } from "@reduxjs/toolkit";
const initailState = [
  {
    name: "kamran",
    age: 20,
    city: "peshawar",
  },
  {
    name: "sudais",
    age: 30,
    city: "multan",
  },
  {
    name: "sadiq",
    age: 33,
    city: "peshawar",
  },
  {
    name: "ali",
    age: 10,
    city: "sindh",
  },
  {
    name: "afaq",
    age: 21,
    city: "sindh",
  },
  {
    name: "azhar",
    age: 30,
    city: "peshawar",
  },
  {
    name: "kamran",
    age: 13,
    city: "karachi",
  },
  {
    name: "mustafa",
    age: 50,
    city: "karachi",
  },
  {
    name: "imran",
    age: 14,
    city: "sindh",
  },
  {
    name: "ahmad",
    age: 40,
    city: "karachi",
  },
];

const FITLTER_BY_AGE = "student/filterByAge";
const FITLTER_BY_CITY = "student/filterByCity";
const store = createStore(reducer);

function reducer(state = initailState, action) {
  switch (action.type) {
    case FITLTER_BY_AGE:
      return state.filter((stu) => stu.age < action.payload.age);
    case FITLTER_BY_CITY:
      return state.filter((stu) => stu.city < action.payload.city);
    default:
      return state;
  }
}

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({ type: FITLTER_BY_AGE, payload: { age: 18 } });
store.dispatch({ type: FITLTER_BY_CITY, payload: { city: "peshawar" } });
