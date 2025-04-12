
//forEach loop : forEach can not terurn a value.

// array.forEach(element => {
    
// });

const coding = ["javaScript", "ruby", "python", "java", "c++"]

// coding.forEach( function (params) {
//     console.log(params);
// } )

// coding.forEach( (val)=>{
//     console.log(val);
// } )

function printme(item) {
    // console.log(item);
}
// coding.forEach(printme)

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const mycodding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
mycodding.forEach((item) => {
// console.log(item);
// console.log(item.languageName);
// console.log(item.languageFileName);
})

// mycodding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
//     })


// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item  // forEach can not terurn a value.
// })
// console.log(values); // undefined : because forEach can not terurn a value.

// So we can use either filter or in the following way of forEach

// 1.

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNum = []

// myNums.forEach((num) => {
//     if (num >4) {
//         newNum.push(num)
//     }
// })
// console.log(newNum);

// 2. we use filter 