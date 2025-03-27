//reduce() method and explanation

// const myNUms = [1, 2, 3, 4, 5];

// const initialValue = 0;
// const sum = myNUms.reduce(( accumulator , currentValue => accumulator + currentValue, initialValue));

// //here the initialValue is 0, so the accumulator will be 0 in the first iteration
// //and the currentValue will be 1, so the sum will be 0 + 1 = 1
// //in the second iteration the accumulator will be 1 and the currentValue will be 2, so the sum will be 1 + 2 = 3
// //and so on...
// console.log(sum); // expected output: 15

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {  //acc is accumulator, currval is current value //m1
//     console.log(`acc: ${acc} and currval: ${currval}`); 
//     o/p acc: 0 and currval: 1
//         acc: 1 and currval: 2
//         acc: 3 and currval: 3
//     return acc + currval
// }, 0)   //0 is the initial value of the accumulator

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)  //m2

console.log(myTotal); //expected output: 6


const shoppingCart = [
    {
        shop:"onepiece",
        price:1000,
    },
    {
        shop:"shoe",
        price:1008,
    },
    {
        shop:"bag",
        price:1020,
    },
    {
        shop:"earrings",
        price:1009,
    },
]

const totalPill = shoppingCart.reduce((acc, item) => (acc + item.price),0)
console.log(totalPill);



