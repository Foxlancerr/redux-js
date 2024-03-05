const counter = 0;

// console.log(counter + 1)
// console.log(counter + 2)
// console.log(counter + 3)

const objCounter ={
    count: 0
}

// mutable because point as refrence
// const previesState = objCounter
// console.log(previesState)

// objCounter.count = 4
// console.log(previesState)


//immutable
const previesState2 = {...objCounter} // shallow copy
console.log(previesState2)

objCounter.count = 10
console.log(previesState2)
