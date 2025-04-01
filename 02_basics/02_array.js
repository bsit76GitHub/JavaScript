const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //flash

const all_heros = marvel_heros.concat(dc_heros) // It return in new array not modify origonals array : [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_arr = another_arr.flat(Infinity) // It separate in a single array Here we have to pass in which layer have go for separation like any no. or infinity
// console.log(real_another_arr); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// console.log(Array.isArray("Brajendra")) // false
// console.log(Array.from("Brajendra")); // It convert into array : [ 'B', 'r', 'a', 'j', 'e', 'n', 'd', 'r', 'a' ]

// console.log(Array.from({name : "Brajendra"})); // [] , It cannot convert into array thats why they return empty string

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //of(...items: any[]): any[],A set of elements to include in the new array object.Returns a new array from a set of elements.

