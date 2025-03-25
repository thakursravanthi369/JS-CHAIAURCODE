// this - refers current constrast within the scope.... when it run in browser v get windows.... but in node v get empty {}.... 

// const user = {
//     username : "reethu",
//     price : 999,

//     welcomeMessage : function() {
//         console.log(`${this.username} , welcome to website `);
//         // console.log(this); //what u pointing with this....then only o/p excutes..
        
//     }
// }

// // user.welcomeMessage()
// // user.username = "sam"
// // user.welcomeMessage()

// console.log(this); //it shows out of the scope r global scope which shows the empty {} in node....


// function chai(){
//     console.log(this); //here this is object....in object v can see object[global]......so  on
// }
// chai()


// function chai(){   //method1
//     let username = "reethu"
//     console.log(this.username); //here this is undefined.....in function unable to define the this
// }
// chai()  

// const me = function(){
//     let username = "reethu"
//     console.log(this.username); //method2.....same undefined

// }
// chai()


// const chai = () => {
//     let username = "reethu"
//     console.log(this);
// }
// chai()               //it shows empty{} even in arrow function


// const addTwo = (num1,num2) => {   //in {} v have to write return
//     return num1 + num2
// }
// console.log(addTwo(3,4));



// const addTwo = (num1,num2) =>  num1 * num2 //implicit no need of return....its in one data type like single line
// console.log(addTwo(3,4))

// const addTwo = (num1,num2) => (num1 + num2)
// console.log(addTwo(4,4));

const addTwo = (num1 , num2) => ({username: "reethu"}) //in this kind of case the object showuld be in parenthesis ()....

console.log(addTwo(1,2));