const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock');


setInterval(() => {               //for time it should be setInterval
    const date = new Date();
    // console.log(date.toLocaleTimeString());
    // clock.innerHTML = date.toLocaleTimeString();
    clock.textContent = date.toLocaleTimeString();
},1000);  //1s =1000,2s=2000 so on



