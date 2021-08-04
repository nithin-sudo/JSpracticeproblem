var gamblerInitialAmount = 100
let bet = 1
let numOftimesWon = 0
let numberOfBets = 0
const gamblerOwn = 1
while (gamblerInitialAmount < 200 && gamblerInitialAmount > 0 ) {
    let gamblerPlay = Math.floor(Math.random()*10)%2
    if (gamblerPlay == gamblerOwn) {
        gamblerInitialAmount++
        numOftimesWon++
        numberOfBets++
    } else {
        gamblerInitialAmount--
        numberOfBets++
    }
    
}
console.log("Number of times won : "+numOftimesWon +"and Number of bets "+numberOfBets)