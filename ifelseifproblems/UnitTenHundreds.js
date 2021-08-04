const prompt = require("prompt-sync")();
let number = prompt("Enter numbers like 1,10,100,1000......100000000 : ")

if (number == 1){
    console.log("Units");
} else if (number == 10) {
    console.log("Tens");
} else if (number == 100) {
    console.log("Hundreds");
} else if (number == 1000) {
    console.log("Thousands");
}else if (number == 10000) {
    console.log("Ten Thousands");
}else if (number == 100000){
    console.log("Lakhs");
}else if (number == 1000000){
    console.log("Ten Lakhs");
}else if (number == 10000000){
    console.log("Crores");
} else if (number == 100000000){
    console.log("Ten Crores");
} else {
    console.log("Invalid Number");
}