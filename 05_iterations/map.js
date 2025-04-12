
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num) => {return num + 10})
// console.log(newNums);

// Channing of Map
// const newNums = myNumbers.map((num) => num * 10).map((num) => num + 1)
const newNums = myNumbers
                .map((num) => num * 10)  // it change the original value of num so that it pass new value like 1 become 10 but not in original array
                .map((num) => num + 1)   // here value become 11 from 10 and passed new value in newNums
                .filter((num) => num >= 40)
console.log(newNums);


