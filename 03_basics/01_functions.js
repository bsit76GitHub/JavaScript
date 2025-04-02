function sayMyName() {
    console.log("H")
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName // reference of function
// sayMyName() // execution or calling of function

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumber(3,4)

// those value which is passed in function calling is known as Argument
// and those are in function declaration or Function defination is known as Parameter

function addTwoNumber(number1, number2) {
    //    let result = number1 + number2
    //    return result
    return number1 + number2
}
// console.log(addTwoNumber(3,4))
const result = addTwoNumber(3, 6)
// console.log(result);

// function loginUserMessage(username) {
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage()); // undefined just logged in

function loginUserMessage(username = "defaultUsername") {
    // if (username === undefined) {
    //     console.log("Please inter username");
    //     return
    // }

    if (!username) {
        console.log("Please inter username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());

//  for multiple argument we use REST oprator. Note : "..." is known as REST and SPREDE oprator

function calculateCartPrice(...num1) {
    return num1
}

// function calculateCartPrice(val1, val2, ...num1) {
// // here val1 = 100,val2 = 500 and num1 = [ 5300, 2000, 400 ]
//     return num1
// }
// console.log(calculateCartPrice(100, 500, 5300, 2000, 400));

const object1 = {
    username: "hitesh",
    id: 101
}

function passingObject(getObject) {
    console.log(getObject);

}
// passingObject(object1)
passingObject({ username: "hiteshchoudhary", id: 105 })

const array1 = [100,200,3000,40000,5000]
function passingArray(getArray) {
    // console.log(getArray);
    return getArray
}
// console.log(passingArray(array1))
console.log(passingArray([100,200,3000,40000,5000]))