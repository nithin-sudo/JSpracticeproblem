
let flips = 1
let heads = 0
let tails = 0
while(flips < 11)
{
    let random = Math.floor(Math.random() * 10)%2
    if(random == 1)
    {
        heads++
        flips++
    }
    else
    {
        tails++
        flips++
    }
}
console.log("No. of Heads :"+heads)
console.log("No. of tails :"+tails)
console.log("Total No. of flips :"+flips)