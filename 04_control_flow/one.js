// if

// if (condition) {

// }

// < : less than ; > : greater than ; <= : less than equal to ; >= : greater than equal to; != : not equal to;
//  == : equal to only value ; === : strictly equal to (value as well as type)


// if (condition) {

// } else {

// }

// const score = 400;
// if (score >100) {
//     const power = "fly"
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`); // error


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // not prefered to write

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 750) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedin = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromGmail = true

if (userLoggedin == true && debitCard == true) {
    console.log("Able to buy a course");
}

if (loggedInFromGmail == true || loggedInFromGoogle == true) {
    console.log("welcome to Account");
    
}