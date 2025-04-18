//promise creating


//m1


// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){    //Do an sync task... ; //DB calls ,cryptography,network
//         console.log('Async task is completed');
//         resolve()     //then is used for reslove the cosumed task....it directly connceted with reslove.
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('promise consumed');  
    
// })



// //m2

// new Promise(function(resolve,reject){
// setTimeout(function(){
//   console.log('async task 2');
//   resolve()
// },1000)

// }).then(function(){
//     console.log('async 2 resolved');
    
// })



// //passing data in promise....m3

// const promiseThree = new Promise(function(){
//     setTimeout(function(){
//       resolve({  user : 'reet' , email : 'thakursravanthi@gmail.com'})
//  } ,1000)
   
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })

//m4

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({
                username : 'reethu' ,
                password : '123456789' ,
            })
        }else{
            reject('ERROR : something went wrong')
        }
    },1000)
})


promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
console.log(username);
}).catch((error) => {
console.log(error);
}).finally(() => {
    console.log('The promise is either resolve or rejected');
})

//m5

promiseFive = new Promise(function(resolve,reject) {  //v can use .then and async method.....
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({
                username : 'js',
                password : '0369'
            })
        }else{
            reject('ERROR :JS went wrong')
        }
    },1000)
})


async  function cosumePromiseFive(){     //v can also get async method....
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log('error');
    }
}


// cosumePromiseFive()

// async function getAllUsers(){
// try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =await response.json()
//         console.log(data); 
// } catch (error) {
//     console.log('E: ',error);
    
// }
// }

// getAllUsers()

//One more method....with fetch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);  
})
.catch((error) => console.log(error));