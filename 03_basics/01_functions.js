
// function sayMyName(){ //() this barcket represent function....
//     console.log("r");
//     console.log("e");
//     console.log("e");
//     console.log("t");
//     console.log("h");
//     console.log("u");
// }

// // sayMyName()

// // function addTwoNumbers(number1, number2){  //nymber1 number2 called parameters.....

// //     console.log(number1 + number2);
// // }

// function addTwoNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

// const result = addTwoNumbers(3, 5)  //3,5 r called as arguments.....

// // console.log("Result: ", result); //different methods to get o/p


// function loginUserMessage(username = "sam"){           //passing default value.... sam
//     if(!username){                                     // ! this used for vice versa return like ture to false n false to ture.....
//         console.log("PLease enter a username");       //before return value  change will be applicable.........
//         return                                       //after return value cant change anything.........
//     }
//     return `${username} just logged in` //string interpolation `${}`
// }

// // console.log(loginUserMessage("reet"))
// // console.log(loginUserMessage("reet"))  

function calculateCartPrice(...num1){    //... this dots called as spread operator and also rest operator the name  will be decided how v using 
    return num1

}

console.log(calculateCartPrice(200,400,600,2000));


function calculateCartPriceOf(val1,val2,...num1){    
    return num1

}
console.log(calculateCartPriceOf(200,400,600,2000));


const user = {
    name:"reet",
    price:199,
}

function handleObject(anyobject){
    console.log(`hello ${anyobject.name} this is your ${anyobject.price} price`);

}
// handleObject(user)

handleObject({
    name:"reet",
    price:199,
})  //method2 for passing object

const myNewArray = [200,300,500,1000]

function secondValue(getArray){
    return getArray[[2]]
}

// console.log(secondValue(myNewArray)); //passing key 
console.log(secondValue( [200,300,500,1000])); //passing value...........the result will be samee

