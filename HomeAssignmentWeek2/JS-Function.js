// Task 1: Function Declaration 
// Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello, 
// <name>!" to the console.

function userProfile()
{
    console.log("Hello Poornima!")
}
userProfile()

// Task 2: Arrow Function 
// Create an arrow function named `double` that takes a number as a parameter and returns 
// double its value. 

let double = a=>{
    return a*a
}
console.log(double(5))

// Task 3: Anonymous Function 
// Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"` 
// after 2 seconds.


setTimeout (function(){
    console.log("This message is delayed by 2 seconds")
},2000)                      

// Task 4: Callback Function 
// Create a function named `getUserData` that takes a callback function as a parameter. Inside 
// `getUserData`, simulate fetching data with `setTimeout` and then call the callback function 
// with a user object after 3 seconds. 
// Call the `getUserData` function and log the user's name and age using the callback function.

function getUserData(username ,callback)
{
setTimeout (()=>{
    console.log("username is "+username)
    callback()
},3000);

}
function userage(){
    console.log("user age is 30")
}
getUserData("Poornima",userage)