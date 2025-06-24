//Conditional Statement 
//(a)  launchBrowser using if-else statement
let browsername="Chrome"
function launchBrowser()
{
if(browsername==="Chrome")
{
    console.log(`Launch ${browsername} browser`)
}else
{
    console.log("Incorrect browser name")
}
}
launchBrowser()

//(b)runTests using Switch Case
let testType="smoke"
function runTests()
{
    switch(testType)
    {
        case "smoke": console.log(`Test type is ${testType}`)
        break
        case "sanity":console.log(`Test type is ${testType}`)
        break
        case "regression": console.log(`Test type is ${testType}`)
        break
        default:console.log(`Test type is ${testType}`)
        break
        
    }
}
runTests()