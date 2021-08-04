const prompt = require("prompt-sync")()
const FEET_TO_INCH = 12
const FEET_TO_METER = 0.3048

let number = parseInt(prompt(" enter the number to be converted : "))

let option = parseInt(prompt("Enter the option "+
"1:Feet To Inch Conversion "+
"2:Inch To Feet Conversion "+
"3:Feet To Meter Conversion "+
"4:Meter To Feet Conversion"))

switch(option)
{
    case 1:
        console.log(" Feet To Inch is : " + number * FEET_TO_INCH);
        break;
    case 2:
        console.log(" Feet To Meter is : " + number * FEET_TO_METER);
        break;
    case 3:
        console.log(number + " Inch To Feet is : " + number / FEET_TO_INCH);
        break;
    case 4:
        console.log(number + " Meter To Feet is : " + number * FEET_TO_METER);
        break;
    default:
        console.log("Invalid Input.");
}