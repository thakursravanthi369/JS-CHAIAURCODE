// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (shop) => {   //here foreach stores in values as undefined
//     //console.log(shop);
//     return shop   //here v can't return anything in forEach
// } )

// console.log(values);    //undefined


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//filter example

// !!const newNum = myNum.filter((num) => num > 5 )  //m1//filter is used to filter the elements based on the condition..here condition is num>5 and it returns the elements which are greater than 5
// const newNum = myNum.filter((num) => {num > 5} ) //this is wrong..we can't use {} in filter
//!!const newNum = myNum.filter((num) => {return num > 5} )//m2 //this is correct..we can use return in filter....when v open the scope of the function then v need to use return

// console.log(newNum);



//foreach example

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {     //here also v should give the condition inside the forEach
//         newNums.push(num)  //here v can't use return in forEach and should push the elements to newNums array
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
//!!the spelling mention should me clear.....if its captial r small letters much n be same as in the array r given form....if not it will return empty array

// const myBooks = books.filter((bk) => {return bk.genre === 'Non-Fiction'})   //here v can use return in filter
// const myBooks = books.filter((bk) => bk.genre >= '2000') //Nrmaal way of writing the filter function
// const myBooks = books.filter((bk) =>  
//     { return bk.genre === 'Science' && bk.edition >= '2000'}) //here v can use && r || in filter)
const myBooks = books.filter((bk) =>  
    { return bk.title === 'Book Six' ||  bk.edition >= '2019'})
console.log(myBooks);

