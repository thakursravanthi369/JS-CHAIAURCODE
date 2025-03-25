// immediately invoked  function expression (iife) - v use iife to save from global polliution....

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai() //excution call


// (function chai(){
//     console.log(`DB CONNECTED`);
// })()

(function aurcode(){ //here is named iife aurcode is a name r key.....v can also called named iife,key iife etc....
    console.log(`DB CONNECTED`);
    
})(); //here the ; semicolumn will end the code then excute the next...

(() => { //this is simple iife
    console.log(`DB CONNECTED ONE`);
    
})();

((name) => {   //here v pass the agurment
    console.log(`DB CONNECTED TWO ${name} `); //here in  => arrowfunction  also v can excute....
    
})('reethu') //here v pass the parameter 


//main interview question is when v write the two codes the iife should.....