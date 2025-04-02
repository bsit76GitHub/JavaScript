// const tinderUser = new Object() // Singleton Object

const tinderUser = {}  // non-Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        username: {
            firstname: "Brajendra",
            lastname: "Sharma"
        }
    }
}

// console.log(regularUser); //{ email: 'some@gmail.com', fullname: { username: { firstname: 'Brajendra', lastname: 'Sharma' } } }
// console.log(regularUser.fullname); // { username: { firstname: 'Brajendra', lastname: 'Sharma' } }
// console.log(regularUser.fullname.username);//{ firstname: 'Brajendra', lastname: 'Sharma' }
// console.log(regularUser.fullname.username.firstname);  //Brajendra

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

// const obj4 ={obj1,obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj4 = Object.assign({}, obj1, obj2, obj3) 

const obj4 = { ...obj1, ...obj2, ...obj3 } // sepretor method it is latest

// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]
users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
// console.log(tinderUser.hasOwnProperty('isLogged')); // false

// ++++++++++    Destructor of object ++++++++++++++++++++++

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const { courseInstructor } = course
// console.log(courseInstructor); // hitesh
         // or
const { courseInstructor: instructor} = course
// console.log(instructor); // hitesh

// example of syntax of json
// {
//     name": "hitesh",
//     "coursename": "JS in hindi",
//     "price": "free"
// }
           //or
//  [
//     {},
//     {},
//     {}
//  ]          
    