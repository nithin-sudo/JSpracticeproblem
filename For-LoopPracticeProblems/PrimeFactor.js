const prompt = require("prompt-sync")()

let number = prompt("Enter the number to which prime factors be calculated : ")
console.log("the prime factors are : ")

for(let iterator = 2; iterator <= number; iterator++)
{
    while(number % iterator == 0)
    {
        number = number / iterator
        console.log(iterator)
    }
}