let name = "Brajendra"
let age = 25

console.log(`Hello my name is ${name} and my age is ${age}.`);

// const gameName = "abcdefgh"
const gameName = new String('abc-def-gh');
console.log(gameName);
// console.log(typeof(gameName));
// console.log(gameName[1]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const otherString = gameName.slice(-8, 3)
// console.log(otherString);

const anotherString = "      Brajendra      "

// console.log(anotherString);
// console.log(anotherString.trim());
// console.log(anotherString.trimStart());
// console.log(anotherString.trimEnd());

const url = "https://brajendra.com/brajendra%20sharma"
// console.log(url.replace('%20','-'));
// console.log(url.includes('sharma'))

// console.log(gameName.split('-'));//[ 'abc', 'def', 'gh' ]
// console.log(gameName.split('-',2));//[ 'abc', 'def' ]

const str = 'Hello Word'
console.log(str);
