const score = 400

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toFixed(2));

const num = 2345.4987
// console.log(num.toPrecision(4));

const hundrads = 10000000
// console.log(hundrads.toLocaleString()); //10,000,000
// console.log(hundrads.toLocaleString('en-IN')); //1,00,00,000

//++++++++++++++++++++     Maths       ++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.8));
// console.log(Math.min(23,4,67,90,5.2));
// console.log(Math.max(23,4,67,90,5.2));

// console.log(Math.random());
// console.log(Math.random()*10);
// console.log((Math.random()*10)+1);
// console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20
console.log(Math.floor((Math.random() * (max - min + 1))) + min); //random no. b/t 10 to 20
