// in browser Window is a global object

const user = {
    username: "hitesh",
    price: "999",

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);

    }
}

// user.welcomeMessage() // hitesh , welcome to website // { username: 'hitesh', price: '999', welcomeMessage: [Function: welcomeMessage] }
// user.username = "sam"
// user.welcomeMessage() // sam , welcome to website // { username: 'sam', price: '999', welcomeMessage: [Function: welcomeMessage] }

// console.log(this) // {}



// function chai() {
//     let username = "hitesh"
//     console.log(this.username); // in function this.username is not working but in object working. Note: this is working. 

// }
// chai()

// const chai = function(){
//         let username = "hitesh"
//     console.log(this.username);
// }

const chai = () => {
    let username = "hitesh"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 +num2                     //explicite return
// }

// const addTwo = (num1, num2) => num1 +num2 //implicite return

// const addTwo = (num1, num2) => (num1 + num2) //implicite return

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 8));
