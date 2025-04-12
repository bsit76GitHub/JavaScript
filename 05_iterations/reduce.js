const myNums = [1, 2, 3, 4, 5]


// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`Accumulator : ${acc} and currentvalue : ${currval}`);
//     return acc + currval

// }, 10)
// console.log(myTotal);

// const myTotal = myNums.reduce((acc,currval) => acc + currval, 0 )
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "webDev",
        itemPrice: 599
    },
    {
        itemName: "appDev",
        itemPrice: 5999
    },
    {
        itemName: "dataScience",
        itemPrice: 10999
    },
    {
        itemName: "ai&ml",
        itemPrice: 20000
    },
    {
        itemName: "cyberSecurity",
        itemPrice: 50000
    }
]

const priceToPay = shoppingCart.reduce((acc,price) => acc + price.itemPrice, 0)
console.log(priceToPay);

