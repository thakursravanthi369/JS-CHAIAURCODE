//generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6 ; i++){
      color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let intervalId;   //to access v took this in global scope form...
const startChangingColor = function(){
 if(!intervalId){     // intervalId = setInterval(changeBgColor , 1000); ///for good practice v using if startment......            
  intervalId = setInterval(changeBgColor , 1000);
 }
  
  function changeBgColor(){
  document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function(){
  clearInterval(intervalId);
  intervalId = null;   ///v kept null here for clean code; n to not overwrite code on intervalId.......
};

document.querySelector('#start').addEventListener('click' , startChangingColor);

document.querySelector('#stop').addEventListener('click' , stopChangingColor);
