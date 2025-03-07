// Dates

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate); //! date is object

// let myCreatedDate = new Date(06, 2, 25) //in dates the months start from 0-jan,1-feb..........so on in array
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(06, 2, 25, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2025-01-06") // in dates the months start from 01-jan,02-feb..........so on in string....yy-mm-dd 
// let myCreatedDate = new Date("01-20-2025") //in india v prefer mm-dd-yy //with new access the date method1
// console.log(myCreatedDate.toLocaleString());

//********** TIMESTAMP **********

// let myTimeStamp = Date.now() //method2 to access the date
// console.log(myTimeStamp);

// // let myCreatedDate = new Date("2025-01-06")
// // console.log(myCreatedDate.getTime()); //toget milisec time

// console.log(Date.now()/1000); //the o/p will be in 15464625.7...  to roundfigure it
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()); //method1 from starts with 0-jan....
// console.log((newDate.getMonth()) + 1); //method2 from starts with 1-jan.... exact month
// console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
    weekday: "long",
    day:"numeric"
})

console.log(newDate);

















