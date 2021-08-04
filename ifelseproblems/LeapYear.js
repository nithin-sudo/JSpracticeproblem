const prompt = require("prompt-sync")();
let year = prompt("Enter the yaer:");
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("Its a leap year");
} else {
    console.log("its not a leap year");
}