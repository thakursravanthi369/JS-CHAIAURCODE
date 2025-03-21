// //Story of scopes begin with three keywords => let var const
// var a = 1;
// let b = 2;
// const c = 3;  //global scope the values also mentioned in block scope but vice versa not applicable.......

// console.log(a);
// console.log(b);
// console.log(c);

// // Curly braces {} => Scope.....under this the values which is there it called block scope

// //Problems
// if(true){
//     let d = 10;
//     const e = 20;
//     var f = 30; //It can be redelcared plus re-initialized
// }
// console.log(d); //This will throw error as we are trying to access d outside block of if conditional
// console.log(e); //This will also throw error are we are trying to access e outside block of if conditional
// console.log(f); //This will print 30 => And that is a problem, it shouldn't be accessed the block

//Note! => code written in global scope can be accessed in the block scope but the vice-versa is not true

//Note! => Global Scope in console and node js environment (production code) is different


// let a = 300
// const b = 200 //global scopee 

// if(true){
//     let a = 10
//     let b = 20
//     console.log("inner :", a); //block scope
    
// }
// console.log(a) //global scope


//************************ NESTED SCOPE  *************************/

// function one(){
//     const username = "reethu"

//     function two(){
//         const website = "youtube"
//         console.log(username);
        
//     }
//     // console.log(website); //is not defined-error //within the scope the o/p will be defined
  
//     two()
// }

// one()

if (true) {
   const username = "reet"
    if (username === "reet") {
        const webPage = " youtube"
        console.log(username + webPage);    
    }
    console.log(webPage);
}
console.log(username);
