// foreaach loops are used to iterate over an array or object

// Syntax:
// array.forEach(function(currentValue, index, arr), thisValue)
// currentValue: Required. The value of the current element
// index: Optional. The array index of the current element
// arr: Optional. The array object the current element belongs to
// thisValue: Optional. A value to be passed to the function to be used as its "this" value

// const languages = ["telugu", "hindi", "bengali", "marathi"];

//methods of writing a function inside a forEach loop
// languages.forEach(function name() {}) //m1
// languages.forEach(function() {}) //m2 
// languages.forEach(() => {}); //m3

//     languages.forEach(function language( parameter) {
//      console.log(parameter);
//  });

// languages.forEach(function( parameter) {
//     console.log(parameter);
// });

// languages.forEach((language) => {
//     console.log(language);
// });

// languages.forEach((language) => console.log(language)); //m4 //shortest way //implicit return statement


// function printLanguage(language) {
//     console.log(language);
// }

// languages.forEach(printLanguage);

// languages.forEach( (items , index, arr) => {  //items is a variable name, it can be anything and in the function the parameter,index and arr are optional 
//  console.log(items, index, arr);
// }) 

const myCoding = [ 
        {
            name: "javascript",
            type: "programming language"
        },
        {
            name: "html",
            type: "markup language"
        },
        {
            name: "css",
            type: "style sheet language"
        },
        {
            name: "python",
            type: "programming language"
        }
];

myCoding.forEach((item) => {   //here v accessing long amount of data from the object using forEach loop
    console.log(item.name);
})  







