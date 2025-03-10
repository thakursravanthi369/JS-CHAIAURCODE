// const tinderUser = new Object() //declared as a singleton object-but no difference in o/p.....
// const tinderUser = {}  //declared as a non-singleton object,no difference in o/p its shows like object only......

// tinderUser.id = "thakur" ,
// tinderUser.email = "thakursravanthi@gmail.com",
// tinderUser.userName = "Rajput"

// console.log(object.id); //basic eg.

// const itsUser = {

//  id : "thakur" ,
// email : "thakursravanthi@gmail.com",
// userName : "Rajput"
// }

// console.log(Object.keys(itsUser));
// console.log(Object.values(itsUser));
// console.log(Object.entries(itsUser));
// console.log(Object.hasOwnProperty('id')); //its checks whether the key is there r not...


// const regularUser = {
//     fullName:{
//         userName:{
//             firstName:"reet",
//             lastName:"thakur",
//             }
//         }
//     }

//     console.log(regularUser.fullName);
//     console.log(regularUser.fullName.userName); //for more deep accesing the o/p...


//     const targetOne = {a:"1",b:"2"}
//     const targetTwo = {c:"3",d:"4"}
//     const targetFour = {e:"5",f:"6"}

//     // const returnTarget = Object.assign({},targetOne,targetTwo,targetFour) //!!{} show that the elements which are assign in the target as a source it store in {}.....
//     // console.log(returnTarget);

//     const returnTarget = {...targetOne, ...targetTwo} //spearding method
//     console.log(returnTarget);

//     const myUser = [
//         {
//             user:1,
//             email:"abs@gmail.com",

//         },  {
//             user:2,
//             email:"abs@gmail.com",

//         },  {
//             user:3,
//             email:"abs@gmail.com",

//         }
//     ]

//     myUser[1].email = "loveu@gmail.com" //to access and change in array method....
//     console.log(myUser);
    

//****************** OBJECT DESTRUCTOR ****************
    
const course = {
    courseName:"mern",
    price:399,
    courseInstuctor:"hitesh"
}

//const.courseInstuctor... also use this process

const {courseInstuctor} = course //recommanded!!!
const {courseInstuctor:instructor} = course //destructing

console.log(courseInstuctor);


// API's - v get in json formate or array formate...

//JSON-{}....JSON looks like object the key and the value both are in string...
 
// eg. {
//  "name":"reet",
//   "age":25,
// }

// eg. [
// {},
// {},
// {},
// ]


