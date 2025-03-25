const accountId = 369369
let accountEmail = "thakursravanthi1111@gmail.com"
var accountPassword = "Maakali@11"
accountCity = "Jaipur" // not recommended
let accountState;

// accountId = 2 // not allowed

/* Prefer not use var
because of issue in block scope and function scope */


console.log(accountCity); //method 1 of how to write console.log for single output.

accountEmail = 12345
accountPassword = "hdfc@12345"
accountCity = "bengal"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]); //method 2 with console.table for multiple outputs.