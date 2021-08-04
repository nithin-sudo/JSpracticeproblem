const prompt = require("prompt-sync")()

function palindrome(numberOne,numberTwo)
{
    let remainder = 0
    let reverse = 0
    let temp = numberOne
    while(true)
    {
        if(temp < 0)
        {
            remainder = temp % 10;
            reverse = reverse * 10 +remainder
            temp = temp / 10
        }
        else
        {
            break
        }
    }
    if(reverse == numberTwo)
    {
        console.log(numberOne+"is a palindrome of "+numberTwo)
    }
    else
    {
        console.log(numberOne+"is not a palindrome of "+numberTwo)
    }
}
let numberOne = prompt("Enter number One: ")
let numberTwo = prompt("Enter number Two : ")
palindrome(numberOne,numberTwo)