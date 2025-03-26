//for syntax

// for (let index = 0; index < array.length; index++) {   //let index is a varaiable , index < array.length is a condition , index++ is a
// increment 
//     const element = array[index]; //array[index] is a value of array
//     console.log(element); //print the value of array
    
// }

// for (let index = 0; index < 10; index++) {     //for loop with index < 10 condition
//     const element = index;
//     console.log(element);
    
// }
// for (let i= 0; i < 10; i++) {
//     const element = i;
//     if (element === 5) {                       //if statement inside loop 
//         console.log('5 Five is the best number');    
//     }
//     console.log(element);
    
// }

// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop value : ${i}`);
//     for (let index = 0; index <=5; index++) {             //loop inside loop with different variable
//        console.log(`inner loop value : ${index} and outer loop value : ${i}`)
//     }
    
// }
// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop value : ${i}`);
//     for (let j = 1; j <= 10;j++) {               //loop inside loop 
//        console.log(i + '*' + j + '=' + i * j);   //print the multiplication table
//     }
    
// }

// let myArray = ["success" , "is in" , "gods plan"];     //array with string values and loop to print the values
                                                          
// for (let index = 0; index < myArray.length; index++) {    
//     const element = myArray[index];
//     console.log(element);
// }


// let myArray = ["success" , "is in" , "gods plan"];    
                                                          
// for (let index = 1; index <= myArray.length; index++) {    //loop with index starting from 1, index <= myArray.length condition it will print undefined if index is greater than array length
//     const element = myArray[index];
//     console.log(element);
// }


// for (let index = 1; index <= 20; index++) {
//     if (index == 6) {                 //if statement to print even numbers
//         console.log(`let me read this again : ${index}`);
//         break;                        //break statement to stop the loop
//     }
//     console.log(`value of i : ${index}`);
    
// }


for (let index = 1; index <= 20; index++) {
    if (index == 6) {                 //if statement to print even numbers
        console.log(`let me read this again : ${index}`);
      continue;                        //continue statement to skip the loop for one iteration rather than stopping the loop and continue with the next iteration
    }
    console.log(`value of i : ${index}`);
    
}








