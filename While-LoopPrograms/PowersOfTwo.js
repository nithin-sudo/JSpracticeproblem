let n = 0
let result = 1
while(true)
{
    console.log(" 2 pow of "+n+ " is :"+result)
    if(result == 256)
    {
        break
    }
    else
    {
        result = 2 * result
        n++
    }
}