const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// buttons.forEach((button)=> {
//     button.addEventListener('click',(e) => {
//       if (e.target.navy === 'navy') {
//         body.style.backgroundColor = 'navy';        //method1 targeting with the name
//       }
//       if (e.target.navy === 'navy') {
//         body.style.backgroundColor = 'e.target.id';        //method2 targeting with the name recommended
//       }
//       if (e.target.id === 'navy') {
//         body.style.backgroundColor = 'navy';        //method3 targeting with the id recommended
//       }
//       if (e.target.id === 'red') {
//         body.style.backgroundColor = 'red';       
//       }
//       if (e.target.id === 'green') {
//         body.style.backgroundColor = 'green';        
//       }
//       if (e.target.id === 'pink') {
//         body.style.backgroundColor = 'pink';        
//       }

    body.style.backgroundColor = e.target.id;  // method4 targeting with the id recommended

//  switch (e.target.id) {                           //method5 targeting with the id recommended
//     case 'navy':
//       body.style.backgroundColor = 'navy'; 
//       break;
//     case 'red':
//         body.style.backgroundColor = 'red'; 
//         break;
//     case 'green':
//         body.style.backgroundColor = 'green'; 
//         break;
//     case 'pink':
//         body.style.backgroundColor = 'pink'; 
//         break;
//     default:
//         body.style.backgroundColor = 'purple'; 
//         break;
//     }

// if (e.target.id === 'navy') {                     //with if statement    
//         body.style.backgroundColor = 'navy'; 
// }
// if (e.target.id === 'red') {
//         body.style.backgroundColor = 'red';
// }
// if (e.target.id === 'green') {
//         body.style.backgroundColor = 'green';
// }           
// if (e.target.id === 'pink') {
//         body.style.backgroundColor = 'pink';
// }
// if(e.target,id === 'purple'){
//         body.style.backgroundColor = 'purple';
// }


// if (e.target.id === 'navy') {                           //method6 targeting with the id recommended and ifelse
//     body.style.backgroundColor = 'navy';
// } else if (e.target.id === 'red') {
//     body.style.backgroundColor = 'red';
// }else if (e.target.id === 'green') {
//     body.style.backgroundColor = 'green';
// } else if (e.target.id === 'pink') {
//     body.style.backgroundColor = 'pink';
// } else if (e.target.id === 'purple') {
//     body.style.backgroundColor = 'purple'; 
// } else {
//     body.style.backgroundColor = 'purple';  
// }


// do {
//     body.style.backgroundColor = e.target.id;          //method7 targeting with the id recommended and do while;
//     console.log(e.target.id);
//     console.log(body.style.backgroundColor);
// } while (e.target.id === 'navy') {  
//     body.style.backgroundColor = 'navy';
//     console.log(e.target.id);
//     console.log(body.style.backgroundColor);
// } else if (e.target.id === 'red') {
//     body.style.backgroundColor = 'red';
//     console.log(e.target.id);
//     console.log(body.style.backgroundColor);
// } else if (e.target.id === 'green') {
//     body.style.backgroundColor = 'green';
//     console.log(e.target.id);
//     console.log(body.style.backgroundColor);
// } else if (e.target.id === 'pink') {
//     body.style.backgroundColor = 'pink';
//     console.log(e.target.id);
//     console.log(body.style.backgroundColor);
// } else if (e.target.id === 'purple') {
//     body.style.backgroundColor = 'purple';
//     console.log(e.target.id);
//     console.log(body.style.backgroundColor);
// } else {
//      body.style.backgroundColor = 'purple';
//      console.log(e.target.id);
//      console.log(body.style.backgroundColor);
//  }

    })
})
  
