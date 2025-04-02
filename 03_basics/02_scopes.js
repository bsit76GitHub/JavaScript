// var c = 300 it is a global scope variable
// let a =400 
// if(true){
//     let a=10
//     const b=20
//     console.log(a); //10
    
// }
// console.log(a); //400

function one() {
    const username = "hitesh"

    function two() {
        const website = "hitesh.com"

        console.log(username);
        
    }
    // console.log(website); //error

    two()
}
// one()

//++++++++++++++    interesting fact       ++++++++++++++++++++++++++

// 1. Example of FUNCTION

// function addone(num) {
//     return num + 1
// }
// addone(5) // return 6

// 2. Example of EXPRESSION

// const addTwo = function(num) {
//     return num + 2
// }
// addTwo(7) // return 9

//--------   but   ----------

// addone(5) // return 6

// function addone(num) {
//     return num + 1
// }

// addTwo(7) // Cannot access 'addTwo' before initialization

// const addTwo = function(num) {
//     return num + 2
// }

