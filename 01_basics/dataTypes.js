/*      # Primitive : call by value {changed in copy value not original value} : 7 type

  Srting || Number || Boolean || null {null means null or empty not empty string} || undefined || Symbol  || BigInt

 
// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

*/

let userEmail; // let userEmail = undefined ;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false
/*
       # Non-Primitive : Reference

        Array || Objects || Functions

 # JavaScript is Dynemic Typed language    

// https://262.ecma-international.org/5.1/#sec-11.4.3

*/

const heros = ["SubhasChandreBose", "BagatSingh"];
let obj = {
    name: "Brajendra",
    age: 70,
}

const myFunction = function(){
    console.log("Hello Function");
    
}

/*

Type of val	Result
Undefined	"undefined"
Null	"object"
Boolean	"boolean"
Number	"number"
String	"string"
Object (native and does not implement [[Call]])	"object"
Object (native or host and does implement [[Call]])	"function"
Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".
11.4.4
*/