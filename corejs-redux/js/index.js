// const counter = 0;

// // console.log(counter + 1)
// // console.log(counter + 2)
// // console.log(counter + 3)

// const objCounter ={
//     count: 0
// }

// // mutable because point as refrence
// // const previesState = objCounter
// // console.log(previesState)

// // objCounter.count = 4
// // console.log(previesState)

// //immutable
// const previesState2 = {...objCounter} // shallow copy
// console.log(previesState2)

// objCounter.count = 10
// console.log(previesState2)

// let Student = {
//   name: "kmaran",
// };

// let previesState = Student
// console.log(Student);
// function stateUpdate() {
//   Student.name = Student.name + " khan";
// }

// stateUpdate();
// console.log(previesState);
// console.log(Student);

// let counter = {
//   count: 0,
// };

// console.log(counter);
// counter.count = counter.count + 1;
// console.log(counter);
// counter.count = counter.count + 1;
// console.log(counter);
// counter.count = counter.count + 1;
// console.log(counter);

// console.log(counter);
// function updateCounter() {
//   counter.count = counter.count + 1;
// }
// updateCounter();
// console.log(counter);
// updateCounter();
// console.log(counter);
// updateCounter();
// console.log(counter);

// let counter = {
//   count: 0,
// };
// let previesState  = counter

// // console.log(previesState);

// immutable
// function updateCounter() {
//   return counter = { count: counter.count + 1 };
// }
// var newV = updateCounter()
// console.log(newV)
// newV = updateCounter()
// console.log(newV)
// var newV = updateCounter()
// console.log(newV)
// newV = updateCounter()
// console.log(newV)

// let student = {
//   name: "ahmad",
//   age: 18,
//   counter: 0,
// };

// function updateState() {
//   return (student = { ...student, counter: student.counter + 1 });
// }

// console.log(updateState());
// console.log(updateState());
// console.log(updateState());
// console.log(updateState());

/**
 * @redux_reducer function
 */

// let student = {
//   name: "kamran",
//   count: 0,
// };

// function reducer(state) {
//   return { ...state, count: state.count + 1 };
// }

// const state1Student = reducer(student)
// console.log(state1Student)
// const state2Student = reducer(state1Student)
// console.log(state2Student)
// const state3Student = reducer(state2Student)
// console.log(state3Student)

/**
 * @redux_action
 * action is pure javascript objects
 * @param { action:{ type: something, payload: something } }
 */

// let student = {
//   name: "kamran",
//   count: 0,
// };

// function reducer(state, action) {
//   if (action.type === "INCREMENT") {
//     return { ...state, count: state.count + 1 };
//   } else if (action.type === "DECREMENT") {
//     return { ...state, count: state.count - 1 };
//   } else {
//     return state;
//   }
// }

// const state1Student = reducer(student, { type: "INCREMENT" });
// console.log(state1Student);
// const state2Student = reducer(student, { type: "DECREMENT" });
// console.log(state2Student);
// const state3Student = reducer(student, { type: "kana banoo" });
// console.log(state3Student);

/**
 * @redux_action_payload
 * action is pure javascript objects
 * @param { action:{ type: something, payload: something } }
 *
 * type convention post/increment
 * type convention post/decrement
 */

// let bank = {
//   id: 1,
//   name: "hbl",
//   amount: 0,
// };

// const Deposit = "DEPOSIT";
// const Withdraw = "WITHDRAW";
// const CheckBalance = "CHECK_BALANCE";
// function reducer(state, action) {
//   if (action.type === Deposit) {
//     return { ...state, count: state.amount + action.payload };
//   } else if (action.type === Withdraw) {
//     return { ...state, count: state.amount - action.payload };
//   } else if (action.type === CheckBalance) {
//     return state.amount;
//   } else {
//     return state;
//   }
// }

// const deposit_action = {
//   type: Deposit,
//   payload: 1000,
// };

// const withdraw_action = {
//   type: Withdraw,
//   payload: 500,
// };

// const check_balance_action = {
//   type: CheckBalance,
// };

// var bank1 = reducer(bank, deposit_action);
// console.log(bank1)
// bank1 = reducer(bank1, withdraw_action);
// console.log(bank1)
// bank1 = reducer(bank1, check_balance_action);
// console.log(bank1)

/**
 * @param {best practices following to handle state managament}
 */

const addTodo = "TODO/ADD_TODO";
const deleteTodo = "TODO/DELETE_TODO";


const studentArr = [
  { id: 1, name: "ahmad" },
  { id: 2, name: "sudais" },
];

function reducer(state, action) {
  switch (action.type) {
    case addTodo:
      return state.push(action.payload);
    case deleteTodo:
      return state.shift();
    default:
      return state;
  }
}

console.log(studentArr);
reducer(studentArr, {
  type: addTodo,
  payload: { name: "imran", age: 12, id: 3 },
});

console.log(studentArr);
reducer(studentArr, {
  type: deleteTodo,
});
console.log(studentArr);
