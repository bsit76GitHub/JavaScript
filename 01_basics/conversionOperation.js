// let score = ""
// console.log(typeof score); //string
// //console.log(typeof(score)); //string

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber); 
// console.log(valueInNumber);

// let valueInBoolean = Boolean(score)
// console.log(typeof valueInBoolean); 
// console.log(valueInBoolean);

// let valueInString = String(score)
// console.log(typeof valueInString); 
// console.log(valueInString);



/*
                               conversion in Number
scope             type      ||  after conversion :    type      -->  value stored in JS
33           =>   number             =>                number     =>        33
"33"         =>   string             =>                number     =>        33
"33abc"      =>   string             =>                number     =>        NaN. [Not a number]
null         =>   object             =>                number     =>        0
undefined    =>   undefined          =>                number     =>        Nan 
true/false   =>   boolean            =>                number     =>        1/0
"hiten"      =>   string             =>                number     =>        NaN
                               conversion in boolean
scope             type      ||  after conversion :    type      -->  value stored in JS
1            =>   number             =>                boolean     =>        true
33           =>   number             =>                boolean     =>        true
"33"         =>   string             =>                boolean     =>        true
"33abc"      =>   string             =>                boolean     =>        true
null         =>   object             =>                boolean     =>        false
undefined    =>   undefined          =>                boolean     =>        false 
true/false   =>   boolean            =>                boolean     =>        true/false
"hiten"      =>   string             =>                boolean     =>        true
""           =>   string             =>                boolean     =>        false
                             
*/
//***************************   Operations    ****************** */

let value = 3
let negValue = - value
//console.log(negValue); //-3

let str1 = "Hello"
let str2 = "JavaScript"
let str3 = str1 + str2
// console.log(str3); //HelloJavaScript

// console.log("1" + 2); //12
// console.log(1 + "2"); //12

// console.log("1" + 2 + 3); //123
// console.log(1+ 2 + "3"); //33

// console.log(true); //true
// console.log(false); //false
// console.log(+true); // 1
// console.log(-true); // -1
// console.log(+false); // 0
// console.log(-false); // -0
// console.log(+""); // 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 //valid but not prefered to write

let x = 2
let y = x++
console.log(x, y); // 3 2
let a = 2
let b = ++a
console.log(a, b);  // 3 3
