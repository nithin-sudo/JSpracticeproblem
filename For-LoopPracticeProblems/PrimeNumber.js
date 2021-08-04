const prompt = require("prompt-sync")()

let number = prompt("Enter the number : ")
 
var value = 0;
for (count = 1; count <= number; count++) {
    if ((number % count) == 0) {
        value++
    }
}
if (value == 2) {
    console.log("Number " + number + " is a Prime Number")
} else {
    console.log("Number "+ number + " is a Not a Prime Number")
}