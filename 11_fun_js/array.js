
// continious, Holey
// SMI(small integer)
// Packed element
// Double (Float, String, function)


const arrOne = [1, 2, 3] // PACKED_SMI_ELEMENT

const arrTwo = [1, 2.0, 3] // PACKED_DOUBLE_ELEMENT

const arrThree = [1, 2, 3, '5'] // PACKED_ELEMENT

console.log(arrOne);
console.log(arrTwo);

const arrFour = [1,2,3]
arrFour[9] = 11 // after that arrFour becomes HOLEY_SMI_ELEMENT
console.log(arrFour);
console.log(arrFour.length);

// bound check
// hasOwnProperty(arrFour, 9)
// hasOwnProperty(arrFour.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive in js

// Optimise order in JS
//-----------------------------
// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFive = new Array(3)
// just 3 holes. Holey_SMI_Elements
arrFive[0] = '1' //HOLEY_ELEMENTS
arrFive[1] = '2' //HOLEY_ELEMENTS
arrFive[2] = '3' //HOLEY_ELEMENTS

const arrSix = []                    // More optimized
arrSix.push('1') // PACKED_ELEMENT
arrSix.push('3') // PACKED_ELEMENT
arrSix.push('4') // PACKED_ELEMENT


// recomend to use default methos,propertis,etc it is more optimised