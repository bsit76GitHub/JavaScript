
const user = {
    username: "brajendra",
    loginCount: 8,
    signIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this); // { username: 'brajendra', loginCount: 8, signIn: true, getUserDetails: [Function: getUserDetails]}

    }
}
// console.log(user);
// console.log(user.getUserDetails());
// console.log(this); // {}

function User(username, loginCount, isLoggedIn) {
    this.username = username; // myusername (left side declared variable name )= username (right side declared paramiter value)
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
        
    }

    return this // implicite return
}

// const userOne = User("brajendra", 12, true)
// console.log(userOne.username);
// const userTwo = User("Pankaj", 6, false) // it over write User 
const userOne = new User("brajendra", 12, true)
const userTwo = new User("Pankaj", 6, false) 
// console.log(userOne);
// console.log(userTwo);

// Note :-
// ----------
//    "NEW" keyword : 1. it create new "Object" in memory which is called "instance"
//                    2. due to new keyword a "Constructor function" is called
//                    3. all arguments inject into obj through "this" keyword


console.log(userOne.constructor); //[Function: User] || instance of itself

