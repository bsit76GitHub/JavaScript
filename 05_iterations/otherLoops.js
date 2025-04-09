// for-of loop

// ["","",""]
// [{},{},{}]

// for (const element of object) {

// }
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello Word"
for (const greet of greeting) {
    //console.log(`Each char is ${greet}`);
}

// Maps : here no duplicate value accepted // map is not iterable

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
map.set('IN', 'India')

// console.log(map);

for (const [key, value] of map) {
    //console.log(key, ':' ,value);
}

const myObj = {
    game1: 'NFS',
    game2: 'bgmi'
}
for (const [key, value] of myObj) { // TypeError: myObj is not iterable
    // console.log(key, ':', value); 
}