// Array

// 1. Array is written in brackets [  ].
// 2.Array data type is an object.
// 3.Array can contain different data types . i.e string,number,boolean,array etc.
// 4. Array is zero based indexing. It starts with zero.
// 5. Once changed its original value will also change beacause it is non primitive (refrence) type.

// ARRAY METHODs :

// 1.Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4.Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7.Join = converts to string.
// 8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.


// const myArr = [0, 1, 2, 3]
// const myHero = ["thakur" , "rajput"]

// const myArr1 = new Array(0,"thakur")

// console.log(myArr[0]);

//Array methods
// const myArr = [0, 1, 2, 3]
// myArr.push(0)
// myArr.push(6) //adds value at the last
// myArr.pop() // removes last value
// myArr.unshift(9) //adds value at the start
// myArr.shift() //removes the starting value

// console.log(myArr);

// console.log(myArr.includes(9)); //asking qstns method in Boolearn
// console.log(myArr.indexOf(1)); //its show the position r place of number

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice and splice

const myArr = [0, 1, 2, 3, 4, 5, 6]
console.log("A" , myArr);

const myn1 = myArr.slice(1,3) //it only take the range in between 1 to 3...but not inculdes 3...
console.log(myn1);

console.log("B" , myArr);
const myn2 = myArr.splice(1,3) ////it only take the range in between 1 to 3...but it inculdes 3... and also it removes whole splice from orginal value...
console.log("c" , myArr);
console.log(myn2);

//!! 8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// !!9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.










