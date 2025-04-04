//Immediately Invoked Function Expression (IIFE)

//Q. Why iife used?
// Ans. To avoid pollution of global scope variable

// function chai() {
//     console.log(`DB Connected`);
// }
// chai()

(function chai() {
    console.log(`DB Connected`);
})(); // When we write two iife function then semicolon(;) must be use at the end of first function.

(() => {
    console.log(`DB Connected`);
})();

((name) => {
    console.log(`DB Connected ${name}`);
})('hitesh')
