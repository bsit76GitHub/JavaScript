//   array
const myArr = [0,1,2,3,4,5]

const myArr2 = new Array([1,2,3,4,5])

// array methods

// myArr.push(6)
// myArr.pop() // delete last element

// myArr.unshift(23) // place element at first
// myArr.shift() // delete first element

// console.log(myArr.includes(3));
// console.log(myArr.includes(67)); // return -1

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr);

//          slice , splice

console.log("a ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1); //[1,2]

console.log("b ", myArr);  // b  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)  // It change the original array

console.log("c ", myArr);  // c  [ 0, 4, 5 ]

console.log(myn2);[ 1, 2, 3 ]


