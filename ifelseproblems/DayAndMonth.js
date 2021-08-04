const prompt = require("prompt-sync")();

let month = prompt("Enter the month in number format:")
let date = prompt("Enter the date in number format:")

if (( (month >= 3 && date <= 20) && ((month <= 6 && date <= 20)&& (date<31))))
{
    console.log("True")
}
else{
    console.log("False")
}
