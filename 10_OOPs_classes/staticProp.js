// 45
class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    // createId(){
    //     return '123'
    // }

    static createId(){   // static stop to access to every object
        return `123`
    }

}

const brajendra = new User("Brajendra")

// brajendra.logMe()     //  Username: Brajendra
// console.log(brajendra.createId());      // when not static 123 but static get error

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","iphone@gmail.com")
iphone.logMe()    // Username: iphone
// console.log(iphone.createId());
