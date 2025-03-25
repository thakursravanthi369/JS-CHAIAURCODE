const userEmail = "reethu@ai"
//const userEmail = "" //it shows false value
//const userEmail = []//it shows true value

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// if (userEmail.length) {
//     console.log("Array is not empty");   
// }

const objempty = {}
if (Object.keys(objempty).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
}

//interveiw question

//false == 0 //o/p is true
//false === 0 //o/p is false
//false == "" //o/p is true
//false === "" //o/p is false
//false == [] //o/p is true
//false === [] //o/p is false
//false == {} //o/p is false
//false === {} //o/p is false
//false == null //o/p is false
//false === null //o/p is false
//false == undefined //o/p is false
//false === undefined //o/p is false
//false == NaN //o/p is false
//false === NaN //o/p is false
//false == false //o/p is true
//false === false //o/p is true
//false == true //o/p is false
//false === true //o/p is false
//false == "false" //o/p is false
//false === "false" //o/p is false
//false == "0" //o/p is true
//false === "0" //o/p is false    
//false == " " //o/p is true
//false === " " //o/p is false
//false == "null" //o/p is false
//false === "null" //o/p is false
//false == "undefined" //o/p is false
//false === "undefined" //o/p is false
//false == "NaN" //o/p is false
//false === "NaN" //o/p is false
//false == "true" //o/p is false
//false === "true" //o/p is false


// Nullish coalescing operator (??) : null and undefined

let val1 ;
val1 = 50 ?? 100
console.log(val1);

let val2 ;
val2 = null ?? 100  
console.log(val2);

let val3 ;  
val3 = undefined ?? 100
console.log(val3);

let val4 ;
val4 = null ?? 100 ?? 200 //in this case it takes after null r undefined next value...... 
console.log(val4);

//if the values r null r undefined then it will take the value after ??


//ternary operator 

//condition ? True : False

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("I will buy ice tea less then 100") : console.log("I will not buy ice tea more then 100"); //if the condition is true then it will print the first statement else it will print the second statement.... this is called ternary operator.... and it is used for only one line code.... which is implicit type conversion....