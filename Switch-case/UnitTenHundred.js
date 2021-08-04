const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter numbers like 1,10,100,1000......100000000 : "))

switch (number)
{
    case 1:
        console.log("Units");
        break;
    case 10:
        console.log("Tens");
        break;
    case 100:
        console.log("Hundreds");
        break;
    case 1000:
        console.log("Thousands");
        break;
    case 10000:
        console.log("TenThousands");
        break;
    case 100000:
        console.log("Lakhs");
        break;
    case 1000000:
        console.log("TenLakhs");
        break;
    case 10000000:
        console.log("Crores");
        break;
    case 100000000:
        console.log("TenCrores");
        break;
    default:
        console.log("Invalid input");
}