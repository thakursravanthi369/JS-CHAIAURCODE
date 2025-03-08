const my_names = ["reethu" , "jaan" , "munna" , "dia"]
const my_hobbie = ["karate" , "dance" , "swimming"]

// my_names.push(my_hobbie) //it give whole data within a array 
// console.log(my_names);
// console.log(my_names[3]);

// const myInfo = my_names.concat(my_hobbie) //to merge to elements
// console.log(myInfo);

// const myInfo = [...my_names , ...my_hobbie] // ... this dots is represting spread method!!!
// console.log(myInfo);

// const another_array = [1,2,3,4,5,6[2,5[2,5,6,8[2,5,8]]]]
// const real_another_array = another_array.flat(Infinity) //1method to give the how deapth need to know the information....will give infinty
// // const real_another_array = another_array.flat(3) //2method need to mention number....
// console.log(real_another_array);

console.log(Array.isArray("reet"));
console.log(Array.from("reet"));
console.log(Array.from({name:"reet"})); //!!! its gives an array if v not define exact key r value for the o/p

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //v can also use the of for merge o/p...






