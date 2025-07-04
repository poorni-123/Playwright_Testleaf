// Given a string s consisting of words and spaces, return the length of the last word in the string.
// Example 1:
// Input: s = "Hello World"
// Output: 5

let s ="Hello World"
let newword=s.substring(6,11)
console.log(newword.length)

// Example 2:
// Input: s = " fly me to the moon "
// Output: 4

let s1=" fly me to the moon "
let newword1=s1.slice(-4)
console.log(newword1.length)

// Example 3:
// Write a function to check if two strings are anagrams.
// Input: isAnagram('listen', 'silent')
// Output: true
// Input: isAnagram('hello', 'world')
// Output: false
// Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters

function isAnagram(input1,input2){
let trimmedval= input2.trimStart()
let sortedval1=trimmedval.split('').sort().join('')
let sortedval2=input1.split('').sort().join('')
if(sortedval1===sortedval2){
    return true
}else{
    return false
}
}
console.log(isAnagram('hello', 'world'))
