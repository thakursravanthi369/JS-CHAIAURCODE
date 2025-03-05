// primitive

// 7 types : 
// string - the data which v call its from value....copying the data
// number
// Boolearn
// null
// undefined
// symbol
// bigInt

// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.


const score = 100
const scoreValue = 100.3 //number

const isLoggedIn = false //Boolearn
const outsideTemp = null //null
let userEmail; //undefined
 
const id = Symbol('123') //symbol
const anotherId = Symbol('123') 

console.log(id === anotherId);

// const bigNumber = 321564789931456n // BigInt

// non-primitive or reference type

// array
// objects
// functions

const heros = ["jhanu","munni","reet"]; //array
let myObj = {
    name : "thakur" ,
    age : 25 ,

} //object what where v code in curlybarcket is object

const myFunction = function(){
    console.log("hello world");
    
}
console.log(typeof bigNumber);
console.log(typeof null);
console.log(typeof myFunction); //objectfunction

//https://262.ecma-international.org/5.1/#sec-11.4.3 link to read


// STACK AND HEAP MEMORY

//stack (primitive) - for static memory storage...  & heap (non-primitive) - for dynamic memory storage...

//for stack ex: get the copy value...

let myYoutubeName = "thakursravanthi"

let anotherName =  myYoutubeName
anotherName = "thakur"

console.log(myYoutubeName);
console.log(anotherName);

//for heap ex: get the original or refernce value...

let userOne = {
    email : "thakur@google.com",
    upi : "user@ybl"

}

let userTwo = userOne  

userTwo.email = "user@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);










