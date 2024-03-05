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

let counter = {
  count: 0,
};
let previesState  = counter

// console.log(previesState);
function updateCounter() {
  return counter = { count: counter.count + 1 };
}
var newV = updateCounter()
console.log(newV)
newV = updateCounter()
console.log(newV)
var newV = updateCounter()
console.log(newV)
newV = updateCounter()
console.log(newV)
