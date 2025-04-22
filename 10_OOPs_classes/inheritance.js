class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)      //   SetUsername.call(this, username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new courses added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@teacher.com","123")

// console.log(chai);

// chai.addCourse()

chai.logMe()

const masalachai = new User("masalachai")
masalachai.logMe()

console.log(chai === masalachai);   // false
console.log(chai === Teacher);   // false

console.log(chai instanceof Teacher);   // true
console.log(chai instanceof User);   // true
