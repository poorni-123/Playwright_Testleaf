let variable=0
function numbercheck()
{
    if(variable>0)
    {
      console.log(`${variable} is greater than 0`)
    }else if(variable < 0){
        console.log(`${variable} is less than 0`)
    }else{
        console.log(`${variable} is neutral`)
    }
}
numbercheck()