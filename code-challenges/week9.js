// 💡Monday
// How to Solve Code Challenges
// Review the lesson on how to address problem-solving technical questions. Practice in your own time with this code challenge.

// Return the Sum of Two Numbers
// Create a function that takes two numbers as arguments and returns their sum.

// Examples: 	
// addition(3, 2) ➞ 5		addition(-3, -6) ➞ -9	addition(7, 3) ➞ 10

// Notes: Don't forget to return the result and check for edge cases! 

function addNumbers(num1, num2){
  if(typeof num1 && num2 === 'number'){
    return num1 + num2;
  } else {
    console.log('please enter a number')
  }
}

// console.log(addNumbers(2,3));   // output: 5
// console.log(addNumbers(-2,-3)); // output: -5
// console.log(addNumbers('2',2)); // error

// 🗓️Tuesday: The longest word in a string
// Return the length of the longest word in the provided sentence.
// Your output should be a number.
// Example 1: 
// findLongestWordLength("The quick brown fox jumped over the lazy dog") ---> 6
// findLongestWordLength("May the force be with you") ---> 5
// findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") ---> 19

    //Psuedocode
    // split sentence using split method to divide each word into an array (iterate)
    // initialize maxLength variable to track longest word => 0, comparison
    // iterate each word and compare maxLength => if word is greater than maxLength, update maxLength
    // return the result
    //Edge case => consideration of punctuation, receiving non-string

function findLongestWordLength(sentence){
  // split sentence
  const words = sentence.split(' ');
  // initialize maxLength to 0
  let maxLength = 0;
  // iterate over each word
  for(const word of words){
    // update maxLength if current word length is greater
    maxLength = Math.max(maxLength, word.length)
  }
  return maxLength;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6
console.log(findLongestWordLength("May the force be with you"));// 5
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // 19

// 🎥Wednesday: 
// Single Number 
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Example 1:				Example 2:					Example 3:
// Input: nums = [2,2,1]		Input: nums = [4,1,2,1,2]		Input: nums = [1]
// Output: 1				Output: 4					Output: 1

// 🗓️Thursday: Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example 1:					Example 2:
// Input: nums = [0,1,0,3,12]		Input: nums = [0]
// Output: [1,3,12,0,0]			Output: [0]

// Challenge: Can you write your answer without making a copy of the array. Could you minimize the total number of operations done?



// 🗓️Friday: Add Digits
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:						Example 2:
// Input: num = 38					Input: num = 0
// Output: 2						Output: 0
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.

// Challenge: Could you do it without any loop/recursion in O(1) runtime?
