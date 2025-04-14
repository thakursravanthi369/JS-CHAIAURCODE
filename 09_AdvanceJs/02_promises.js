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
        let error = true
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
})
.catch((error) => {
console.log(error);
})