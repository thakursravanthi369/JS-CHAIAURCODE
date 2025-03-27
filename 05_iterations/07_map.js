// const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myNums = Nums.map((num) => num + 10)  //here the value is directly returned and stored in myNums and adding 10 to each element of the array
// const myNums = Nums.map((num) => {return num + 10}) //here the value is returned using return keyword and stored in myNums
//console.log(myNums);
 
// Nums.forEach((num) => num + 10) //here the value is returned but not stored in any variable
// console.log(Nums);



//chaininig 

const Nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const myNums = Nums 
               .map((num) => {return num + 10} ) 
               .map((num) => {return num * 10} ) 
               .filter((num) => {return num > 100}) //in filter v have to keep the condition in the paranthesis
console.log(myNums); //m1

// const myNums = Nums .map((num) => num + 10 ).map((num) => num *10 ) .filter((num) => num > 100) //in filter v have to keep the condition in the paranthesis
// console.log(myNums); //m2

// const myNums = Nums 
//                .map((num) => {return num + 10} )  //here v can use function f=different methods the results is same
//                .map((num) => num *10 ) 
//                .filter((num) => num > 100)
// console.log(myNums); //m3
       


