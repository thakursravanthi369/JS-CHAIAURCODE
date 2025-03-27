// ["" , "" , ""] //array of strings
// [{} , {} , {}] //array of objects

//for of loop sytax

// for (const iterator of object) { //here object can be array or object or string.....object is a generic term
    
// }

// const arr = [1,2,3,4,5,6,7,8,9,10];

// for (const num of arr) {
//     console.log(num);

// }

// const greeting = "Hello World";

// for (const letter of greeting) {   //m1
//     console.log(letter);
// }

// for (const greet of greeting) {
//     console.log(`each char: ${greet}`); //m2
// }

// Summary(As I understood) :
// We can use For of loop for values printing/for iterating over values directly over [[[[ Strings & Array  ]]]]
// We can use For in loop for values printing/for iterating over values by Indexes/Keys over Objects & Arrays & Strings & mapas & sets
// We can use ForEach loop for iterating over values directly over [[[[ Arrays ]]]]


//MAPS & SETS
// Maps & Sets are new data structures in ES6
// Maps are key value pairs
// Sets are unique values
// Maps & Sets are iterable
// Maps & Sets are not arrays & objects
//maps only collect unique keys


//maps

 const map = new Map();
 
 map.set("name", "John");
    map.set("age", 30);
    map.set(true, "yes");
    map.set(false, "no");
    map.set("age", 40); //different duplicate key is allowed
   //  map.set("age", 30); //same duplicate key is not allowed
 

    console.log(map);


    //map in for of loop

    for (const [key, value] of map) {
        console.log(key , '=>' , value); //m1
       // console.log(`Key: ${key} and Value: ${value}`); //m2
    }
    

