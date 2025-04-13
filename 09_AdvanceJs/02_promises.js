//promise creating

const promiseOne = new promise(function(reslove,reject){
    settimeout(function(){    //Do an sync task... ; //DB calls ,cryptography,network
        console.log('Async task is completed');
        reslove()     //then is used for reslove the cosumed task....it directly connceted with reslove.
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed');  
    
})