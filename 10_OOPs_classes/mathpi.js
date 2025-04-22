
// console.log(Math.PI);  // 3.141592653589793
// Math.PI = 5
// console.log(Math.PI);  // 3.141592653589793

const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descripter);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvaliable: true,

    orderChai: function () {
        console.log('chai nahi bani');

    }
}
// console.log(chai);

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name',{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function')
        console.log(`${key} ; ${value}`);

}