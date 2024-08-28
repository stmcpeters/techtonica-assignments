// TUESDAY - search & replace
/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence. First argument is the sentence to perform the search and replace on. Second argument is the word that you will be replacing (before). Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog


Examples
myReplace("Let us go to the store", "store", "mall") should return the string ”Let us go to the mall.”
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string “He is Sitting on the couch.”
myReplace("I think we should look up there", "up", "Down") should return the string ”I think we should look down there.”
myReplace("This has a spellngi error", "spellngi", "spelling") should return the string ”This has a spelling error.”
myReplace("His name is Tom", "Tom", "john") should return the string His name is John.
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return the string Let us get back to more Algorithms.

*/



console.log(myReplace("Let us go to the store", "store", "mall")); // "Let us go to the mall."
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // "He is Sitting on the couch."
console.log(myReplace("I think we should look up there", "up", "Down")); // "I think we should look down there."
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // "This has a spelling error."
console.log(myReplace("His name is Tom", "Tom", "john")); // "His name is John."
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // "Let us get back to more Algorithms."



// WEDNESDAY - STRING MANIPULATION

/*
You are given a string inputStr containing lowercase letters and a target substring targetStr. Your task is to implement a function findTargetIndex(inputStr, targetStr) that returns the starting index of the first occurrence of targetStr in inputStr. If targetStr is not found in inputStr, the function should return -1.

Input:
inputStr (1 <= inputStr.length <= 1000): A string containing only lowercase letters.
targetStr (1 <= targetStr.length <= 100): A substring to search for in inputStr.

Output:
Return the starting index of the first occurrence of targetStr in inputStr.
If targetStr is not found in inputStr, return -1.


Examples:
console.log(findTargetIndex("hello world", "lo"));  // Output: 3
console.log(findTargetIndex("programming", "abc"));  // Output: -1
console.log(findTargetIndex("javascript", "script"));  // Output: 4
console.log(findTargetIndex("challenge", "len"));  // Output: -1
*/


// THURSDAY - ARRAY SEARCH
/*
You are given an array of integers arr and a target element target. Your task is to implement a function findLastIndex(arr, target) that returns the last index at which the target element appears in the array. If the target element is not present in the array, the function should return -1.

Input:
arr (1 <= arr.length <= 100): An array of integers.
target (Integer): The target element to search for in the array.

Output:
Return the last index of the target element in the array.
If the target element is not found, return -1.

Examples:
console.log(findLastIndex([1, 2, 3, 4, 5, 2], 2));  // Output: 5
console.log(findLastIndex([10, 20, 30, 40, 50], 25));  // Output: -1
console.log(findLastIndex([5, 10, 15, 20, 10, 25], 10));  // Output: 4
console.log(findLastIndex([1, 2, 3, 4, 5], 6));  // Output: -1



*/