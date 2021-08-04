let firstRandomNumber = Math.floor(Math.random() * 899)+100;
let secondRandomNumber= Math.floor(Math.random() * 899)+100;
let thirdRandomNumber = Math.floor(Math.random() * 899)+100;
let fourRandomNumber  = Math.floor(Math.random() * 899)+100;
let fifthRandomNumber = Math.floor(Math.random() * 899)+100;

console.log ("Random Number 1: " + firstRandomNumber);
console.log ("Random Number 2: " + secondRandomNumber);
console.log ("Random Number 3: " + thirdRandomNumber);
console.log ("Random Number 4: " + fourRandomNumber);
console.log ("Random Number 5: " + fifthRandomNumber);

let minimum = 0;
let maximum = 0;


if (firstRandomNumber > secondRandomNumber){
    maximum = firstRandomNumber;
    minimum = secondRandomNumber;
} else {
    maximum = secondRandomNumber;
    minimum = firstRandomNumber;
}

if (thirdRandomNumber > maximum ){
    maximum = thirdRandomNumber;
} else if (thirdRandomNumber < minimum) {
    minimum = thirdRandomNumber;
} 

if (fourRandomNumber > maximum ){
    maximum = fourRandomNumber;
} else if (fourRandomNumber < minimum) {
    minimum = fourRandomNumber;
} 

if (fifthRandomNumber > maximum ){
    maximum = fifthRandomNumber;
} else if (fifthRandomNumber < minimum) {
    minimum = fifthRandomNumber;
} 

console.log("Maximum Value among 5 random numbers: " + maximum);
console.log( "Minimum Value among 5 random numbers: " + minimum);