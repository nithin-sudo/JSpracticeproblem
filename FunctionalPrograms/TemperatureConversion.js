const prompt = require("prompt-sync")()
console.log("1.Celsius to Farhenheit\n2.Farhenheit to Celsius");
let number = parseInt(prompt("enter the option"))
console.log("Option is : "+number);
switch (number) {
    case 1:
        console.log("Converting Celsius to Farhenheit");
        let celsiusToFahrenheit = prompt("enter the number ")
        console.log("Value of Celsius: "+celsiusToFahrenheit);
        degC_to_degF(celsiusToFahrenheit);
        break;
    case 2:
        console.log("Converting Farhenheit to Celsius");
        let FarhenheitToCelsius = prompt("enter the number ")
        console.log("Value of Farhenheit: "+FarhenheitToCelsius);
        degF_to_degC(FarhenheitToCelsius);
}

function degC_to_degF(degC) {
    degF = (degC * 9 / 5) + 32;
    console.log(degC+" Celsius in Farhenheit: " + degF);
}
function degF_to_degC(degF) {
    degC = (degF - 32) * 5 / 9;
    console.log(degF+" Farhenheit in Celsius: " + degC);
}