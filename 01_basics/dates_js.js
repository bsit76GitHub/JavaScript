// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,23)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024, 0, 23, 5, 20)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2024-01-15")
let myCreatedDate = new Date("01-19-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let newDate = new Date();
// console.log(newDate.getMonth() + 1); //month counting from 0
// console.log(newDate.getDay()); // starting from monday(1)

newDate.toLocaleString('default',{
    weekday:"long"
})

