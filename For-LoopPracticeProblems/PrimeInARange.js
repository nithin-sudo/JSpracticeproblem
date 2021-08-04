const prompt = require("prompt-sync")()

let lower = parseInt(prompt("Enter the number : "))
let upper = parseInt(prompt("Enter the number : "))

console.log(" Primes between "+lower+" and "+upper+"are :")
for(var number = lower; number <= upper; number++)
{
    if(number > 1)
    {
        var k = 0
        for(let iterator = 2; iterator < number; iterator++)
        {
            if(number % iterator == 0)
            {
                k = 1
                break
            }
        }
        if(k == 0)
        {
            console.log(number)
        }
    }
}