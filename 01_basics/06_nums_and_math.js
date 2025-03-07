// const score = 400 // its gave direct results....
// console.log(score);


// const balance = new Number(100) // when u define in new object its specify the value....
// console.log(balance);
// console.log(balance.toString().length); //toString use to convernt the string...
// console.log(balance.toFixed(2)); //!mostly used method toFixed...

// // const otherNumber = 12.369
// // console.log(otherNumber.toPrecision()); //!toPrecision(precision?: number): string
// //!Number of significant digits. Must be in the range 1 - 21, inclusive.Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

// // const otherNumber = 122.369
// // console.log(otherNumber.toPrecision(3));

// // const otherNumber = 1225.969
// // console.log(otherNumber.toPrecision(4));

// const otherNumber = 1225.969
// console.log(otherNumber.toPrecision(3)); 

// const hunders = 1000000

// //!toLocalString gives commas to user long digit numbers...

// console.log(hunders.toLocaleString()); //for US standards...
// console.log(hunders.toLocaleString('en-IN')); //for INDIAN standars...


// ============================== Maths =================================

// console.log(Math);
// console.log(Math.abs(-25943)); //its gives negative value into positive sign... abs means absolut
// console.log(Math.round(4.6)); //gives round fogure value
// console.log(Math.ceil(4.2)); //takes top value
// console.log(Math.floor(4.9)); //takes less value
// console.log(Math.min(3,5,9,5));
// console.log(Math.max(3,5,8));

console.log(Math.random());
console.log((Math.random()*10) + 1); //!the random value always in between 0 to 1 so to ensure the value of 0 to 1 v keep +1 to not toget 0 values with *10...in barcket
console.log(Math.floor(Math.random()*10) + 1); //it give lowest value with round figure.....

const max = 50
const min = 20

console.log(Math.random() * (max - min + 1) + min);
console.log(Math.floor(Math.random() * (max - min + 1) + min));
console.log(Math.ceil(Math.random() * (max - min + 1) + min));
















