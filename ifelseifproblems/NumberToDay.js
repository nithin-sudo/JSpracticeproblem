const prompt = require("prompt-sync")();
let number = prompt("Enter a number from 0-6 : ")
if (number == 0) {
    console.log("Sunday");
}else if (number == 1) {
    console.log("Monday");
}else if (number == 2) {
    console.log("Tuesday");
}else if (number == 3) {
    console.log("Wednesday");
}else if (number == 4) {
    console.log("Thursday");
}else if (number == 5) {
    console.log("Friday");
}else if (number == 6) {
    console.log("Saturday");
}else {
    console.log("Entered wrong input!")
}