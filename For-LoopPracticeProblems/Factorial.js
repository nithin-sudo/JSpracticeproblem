const prompt = require("prompt-sync")();
let number = prompt("Enter a number :");
let factorial = 1
for (let iterator = 1; iterator <= number ; iterator++) {
    factorial *= iterator
}
console.log("The factorial of "+number+" is "+factorial);