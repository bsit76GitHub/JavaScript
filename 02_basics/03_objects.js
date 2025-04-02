// singleton : created by constractor
// Object.create

// object literals

const mySym = Symbol("Key1")

const jsUser = {
    "full name": "Brajendra Sharma",
    name: "Brajendra",
    age: 25,
    location: "Jaipur",
    email: "abc@gmail.com",
    isLogedIn: false,
    [mySym]: "mykey1"
}
// console.log(jsUser.email); // it is not good habit

// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// overwrite value of a key
jsUser.email= "abcd@gmail.com"

// Object.freeze(jsUser)
// jsUser.email= "abcdef@gmail.com"

// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello JS user.");
    
}
console.log(jsUser.greeting); // [Function (anonymous)]
console.log(jsUser.greeting()); //Hello JS user.

jsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(jsUser.greetingTwo()); // Hello JS user, Brajendra




