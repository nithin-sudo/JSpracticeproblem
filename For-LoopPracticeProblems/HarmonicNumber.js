const prompt = require("prompt-sync")()

let number = prompt("Enter the number to find Harmonic Number : ")
let harmonicNumber = 0

for (let iterator = 1; iterator <= number; iterator++) {
    harmonicNumber = 1/(iterator+harmonicNumber)
    console.log("the Nth harmonic number :"+harmonicNumber)
}
    
