const myObj = {
    js: 'javaScript',
    cpp: 'C++',
    py: 'python'
}

for (const key in myObj) {
    //console.log(`${key} is shortcut for ${myObj[key]}`);

}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
   // console.log(key); // 0 1 2 3 4
   // console.log(programming[key]); //js rb py java cpp
}