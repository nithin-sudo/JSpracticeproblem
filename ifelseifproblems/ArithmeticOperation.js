const prompt = require("prompt-sync")();

var numberOne = prompt("Enter first number : ")
var numberTwo = prompt("Enter second number : ")
var numberThree = prompt("Enter third number : ")

var expressionOne = numberOne + numberTwo * numberThree;
console.log("Result Of Expression1 is : " + expressionOne);

var expressionTwo = numberOne % numberTwo + numberThree;
console.log("Result Of Expression2 is : " + expressionTwo);

var expressionThree = numberThree + numberOne / numberTwo;
console.log("Result Of Expression3 is : " + expressionThree);

var expressionFour = numberOne * numberTwo + numberThree;
console.log("Result Of Expression4 is : " + expressionFour);
//Maximum value
if (expressionOne > expressionTwo && expressionOne > expressionThree && expressionOne > expressionFour) {
    console.log("Maximum Value is "+expressionOne)
} else if (expressionTwo > expressionThree && expressionTwo > expressionFour) {
    console.log("Maximum Value is "+expressionTwo)
} else if (expressionThree > expressionFour) {
    console.log("Maximum Value is "+expressionThree)
} else {
    console.log("Maximum Value is "+expressionFour)
}

//Minimum value
if (expressionOne < expressionTwo && expressionOne < expressionThree && expressionOne < expressionFour) {
    console.log("Minimum Value is "+expressionOne)
} else if (expressionTwo < expressionThree && expressionTwo < expressionFour) {
    console.log("Minimum Value is "+expressionTwo)
} else if (expressionThree < expressionFour) {
    console.log("Minimum Value is "+expressionThree)
} else {
    console.log("Minimum Value is "+expressionFour)
}