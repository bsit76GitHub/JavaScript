const accountId = "1"
let accountEmail = "abc@.com"
var accountPassword = "12345" 
accountCity = "Patna"
let accountState;
/*
prefer not to use var because of issue in block scope and functional scope.

*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
// accountId=2  can't change
accountEmail = "ab@caches.com"
accountPassword = "121212"
accountCity = "Ranchi"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
