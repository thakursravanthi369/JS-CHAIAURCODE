// const form = document.querySelector('form')
// //this usecase will give you empty value
// // const weight = document.querySelector('#weight').value

// form.addEventListener('sumbit',(e) => {
//      e.preventDefault();
// const height = parseInt(document.querySelector('#height').value);
// const weight = parseInt(document.querySelector('#weight').value);
// const results = document.querySelector('#results');

// if(height === '' || height < 0|| isNaN(height)) {
//      results.innerHTML ='please enter a valid height' `${height}`;
// } else if(weight === '' || weight < 0 || isNaN(weight)){
//     results.innerHTML = 'please enter a valid weight' `${weight}`;
// } else{
//      // calculate BMI
//      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//      results.innerHTML = `Your BMI is ${bmi}`;
// } 
 

// // BMI categories
//      if(bmi < 18.5){
//           results.innerHTML += '<br> You are underweight';       
//      }else if(bmi >= 18.5 && bmi < 24.9){
//                results.innerHTML += '<br> You are normal weight';
//           }else if(bmi >= 25 && bmi < 29.9){
//                results.innerHTML += '<br> You are overweight';                            
//           }else{
//              results.innerHTML = 'show the result';
//           }    
// });


const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


// BMI categories

if(bmi < 18.5){
     results.innerHTML += '<br> You are underweight';       
}else if(bmi >= 18.5 && bmi < 24.9){
          results.innerHTML += '<br> You are normal weight';
     }else if(bmi >= 25 && bmi < 29.9){
          results.innerHTML += '<br> You are overweight';                            
     }else{
        results.innerHTML = 'show the result';
     }    


