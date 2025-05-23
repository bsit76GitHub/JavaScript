// Promises

const promiseOne = new Promise(function(resolve, reject){
    // Do any Async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise consumed');
})

new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log('Async task 2');
        resolve
    },1000)
}).then(function(){
    console.log('Async 2 resolved');

})


const promise3 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve({ username: "brajendra", email: "brajendra@gmail.com" })
    }, 1000)
})
promise3.then(function (user) {
    console.log(user);

})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "brajendra", password: "12345" })
        } else {
            reject('ERROR: Something went wrong')
        }

    }, 1000)
})
promise4.then((user) => {
    console.log(user);
    return user.username
})
    .then((username) => {
        console.log(username);

    })
    .catch(function (err) {
        console.log(err);

    })
    .finally(() => console.log("The promise is either resolved or reject") )

    const promise5 = new Promise((resolve, reject) => {
        setTimeout(function () {
            let error = true
            if (!error) {
                resolve({ username: "JavaScript", password: "12345" })
            } else {
                reject('ERROR: JS went wrong')
            }
        }, 1000)
    })

    async function consumePromise5() {
        try {
            const response = await promise5
            console.log(response);

        } catch (error) {
            console.log(error);

        }
    }
    consumePromise5()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);           
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((e) => console.log(e))
