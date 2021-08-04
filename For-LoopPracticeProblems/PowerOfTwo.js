const prompt = require("prompt-sync")()

let number = prompt("Enter the number upto which you want powers : ")

for (let iterator = 0; iterator <= number; iterator++){
    let Power = Math.pow(2,iterator)
    console.log(" 2 power "+iterator +"is "+Power)
}