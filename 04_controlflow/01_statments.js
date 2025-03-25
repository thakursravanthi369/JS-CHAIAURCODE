//basic if else

// const isUserloggedIn = true
// const temperature = 41

// if(temperature < 50){
//     console.log("less then 50");   
// }else{
//     console.log("temperature is greater then 50"); 
// }
// console.log("excuted");



// console.log("temperature is greater then 50");  //it will excute bez its not in function scope-....so in this case v use else statement...to aviod the pollution enivorment of global scope...like iife


//< , > , <= , >=  //its for simple code like less then, greater then, less then equals to, greater then equals to....
//!= . !== //its negative sign likke like equals to , strictly not equal to.....
// == , === //its for equals to , equals to with what typeof the code is......

// function isJavascriptHard(teacher){

//     if(teacher=="Hitesh Choudhary"){
//      console.log("Javascript is easy")
//     }
//     else{
//       console.log("javascript is difficult") 
//     }
//     }
    
//     isJavascriptHard("Hitesh Choudhary")


// const score = 200

// if(score > 100) {
//  const power = "fly"
//  console.log(`user power : ${power}`);
 
// }

// const balance = 2000

// if(balance > 1000) console.log("excuted"); //one line code is called Implicit Type Conversion or Type coercion in JavaScript is the automatic conversion of one data type to another.

//if(balance > 1000) console.log("excuted"); console.log("excuted2"); //not recommended this kind of codes....

//++++++ basic nested if else +++++++++

// const balance = 1000

// if(balance < 500){
// console.log("less then 500");

// }else if (balance < 700){
//     console.log("less then 700");
    
//     }else if (balance < 900){
//         console.log("less then 900");
        
//         } else {
//             console.log("less then 1200");
            
//         }
    

//Symbol	Operation	Description
// &&	AND	True only if both exp1 and exp2 are true; otherwise, false.
// ||	OR	True if either exp1 or exp2 is true; false (0) only if both are false.
// !	NOT	False if exp1 is true; true if exp1 is false.

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3)
    {    console.log("Allow to buy course");
     } //the all conditions should match....and v cann use && twices ,logical AND ( && ) (logical conjunction)



if (loggedInFromGoogle || loggedInFromEmail) { //here v use || to accept multiple parameters....
    console.log("User logged in");
}

    
    