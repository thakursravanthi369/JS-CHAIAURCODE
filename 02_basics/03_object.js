// singleton - will be happened in the code when constructor function is coded.
//singleton: jab constructor banega tab, na ki jab literals banenge tab
//obejct.create

//objecct - literals

mySym = "mykey"

const JsUser = {
    name:"sravanthi",
    "surname":"thakur",
    [mySym]:"mykey",  //the only way to write and access the symbol in object...
    age:25,
    location:"hyderabad",
    email:"thakursravanthi@google.com",
    isLoggedIn:true,
    lastLoggedIn:["monday","sunday"]
    
}
// console.log(JsUser);// to access whole object...
// console.log(JsUser.name); //method1 to acccess the object key.....
// console.log(JsUser["surname"]);//method2 to access the object key which is in stringform.....only way to access
// console.log(JsUser["email"])//method3 to acccess
// console.log(JsUser[mySym]);//noneed of keeping string....

//to change the email r any key value...
JsUser.email = "thakur@chatgpt.com"
// console.log(JsUser.email);

//freeze is used to freeze the object to not change futher.....
// Object.freeze(JsUser)

JsUser.name = "moon" //the data is not changes bez it freezed....
// console.log(JsUser.name); 

JsUser.greetingOne = function(){
    console.log("hello Js User");
    
}
JsUser.greetingTwo = function(){
    console.log(`heelo Js User,${this.name}`);   
}
console.log(JsUser.greetingOne());
console.log(JsUser.greetingTwo());









