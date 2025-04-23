class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    // complusary to write same name of getter & setter as property name 
    
    set email(value) {
        // this._email = value.toUpperCase()
        this._email = value
    }
    get email() {
        return this._email.toUpperCase()
        // here return is complusary even Empty
    }

    get password() {
        // return this._password.toUpperCase()
        return `${this._password}brajendra`
    }
    set password(value) {
        this._password = value
    }

}

const brajendra = new User("b@gmail.com", "abcd")
console.log(brajendra);    //  User { email: 'h@gmailcom', _password: 'abcd' }
console.log(brajendra.password);    // ABCD
console.log(brajendra.email);

