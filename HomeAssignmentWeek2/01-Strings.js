let input="madam"
let reversedinput =''
let characters=input.split('')
for(let i=characters.length-1;i>=0;i--)
 {
   reversedinput=reversedinput+characters[i] 
 }
 console.log(reversedinput)
 console.log(input)
if(reversedinput===input)
  {
    console.log("String is a palindrome")
}else
{
    console.log("String is not a palindrome")
}
 


 
