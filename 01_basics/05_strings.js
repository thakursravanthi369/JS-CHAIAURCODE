// const name = "thakur" //method1 to use string to write
// const repoCount = 50

// console.log(name + repoCount + "value"); not recommended

//String interpolation is a technique for substituting variable values into placeholders in a string.

// console.log(`hello my name ${name} and my repoCount is ${repoCount}`);

// const gameName = newString('thakur') //method2 to use new keyword with string and when ever v use 'new' key word v use objects... 

// console.log(gameName[0]); 
// console.log(gameName.__proto__); //for which function v use proto
// console.log(gameName.length); //for length of the value
// console.log(gameName.toUpperCase); //for knowing the function
// console.log(gameName.charAt(5)); //for which letter v use charAt
// console.log(gameName.indexOf('3')); //for which position v use indexOf  

const gameName = new String('thakur-reet')

const newString = gameName.substring(0,4) //substring will be the range of 0,1,2,3 not allowed 4th value...v cant use negative value in it....
console.log(newString);

const anotherString = gameName.slice(-4,2) //its starts from backwards or from left to right or like from negative value....v can give negative values to it....
console.log(anotherString);

const newStringOne = " thakur   "
console.log(newStringOne);
console.log(newString.trim()); //!v use trim to ease useless space and gap....which v dont want to save in database....

const url = "https//:reethu%50rajput"

console.log(url.replace('%50','_'));
console.log(url.includes('thakur'));
console.log(url.includes('reethu'));
console.log(gameName.split('e'));
















