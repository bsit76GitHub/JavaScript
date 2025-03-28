let score = ""
console.log(typeof score); //string
//console.log(typeof(score)); //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber); 
console.log(valueInNumber);

let valueInBoolean = Boolean(score)
console.log(typeof valueInBoolean); 
console.log(valueInBoolean);

let valueInString = String(score)
console.log(typeof valueInString); 
console.log(valueInString);



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