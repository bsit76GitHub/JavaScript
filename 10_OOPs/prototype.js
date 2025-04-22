// let myName = "brajendra     "
// let mychannel = "abcd     "

// console.log(myName.length); // 11

let heros = ["thor", "spiderman"]

let heroPower = {
    thor: 'hammer',
    spiderman: 'slink',

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);

    }
}

Object.prototype.hitesh = function () {
    console.log(`hitesh is present in all object`);
}

Array.prototype.heyHitesh = function () {
    console.log(`hitesh is present in all objects`);

}

// console.log(heroPower.getSpiderPower());

// heroPower.hitesh()
// heros.hitesh()

// heros.heyHitesh()

// heroPower.heyHitesh() // error

//    Inheritance : 
// ------------------

const User = {
    name: 'chai',
    email: 'chai@google.com'
}
const Teacher = {
    makeVideo: true
}
const teachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,

    __proto__: teachingSupport //method to apply prototypal inheritance //outdated

}

Teacher.__proto__ = User  //method to apply prototypal inheritance //outdated

// Modern Syntax
Object.setPrototypeOf(teachingSupport, Teacher)

let anotherUsername = 'chaiAurCode        '

String.prototype.trueLenght = function(){
    console.log(`${this}`);
    console.log(`True lenght is: ${this.trim().length}`);
    
}

anotherUsername.trueLenght()
'brajendra'.trueLenght()
"icetea     ".trueLenght()
