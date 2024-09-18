
// 🗓️Tuesday: Nested Arrays
// Create a function that returns true if the first array can be nested inside the second and false otherwise.
// arr1 can be nested inside arr2 if:
// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true
// canNest([3, 1], [4, 0]) ➞ true
// canNest([9, 9, 8], [8, 9]) ➞ false
// canNest([1, 2, 3, 4], [2, 3]) ➞ false

// input: 2 arrays
function canNest(arr1, arr2) {
// check the min of each array
  // get arr1 min 
  // get arr2 min
  const arr1Min = Math.min(...arr1);
  const arr2Min = Math.min(...arr2);
// check the max of each array
  // get arr1 max 
  // get arr2 max
  const arr1Max = Math.max(...arr1);
  const arr2Max = Math.max(...arr2);
  // compare mins and maxes of each array
  // if arr1 min > arr2's AND arr1 max < arr2's 
  if (arr1Min > arr2Min && arr1Max < arr2Max){
    return true;
  } else {
    return false;
  }
// output: true/false
}
      // edgecases: not a number => check typeof before, error msg when nAn 
                  // equal min/max (counts as false rn)
//console.log(canNest([1, 2, 3, 4], [0, 6])); // true
//console.log(canNest([3, 1], [4, 0])); // true
//console.log(canNest([9, 9, 8], [8, 9])); // false
//console.log(canNest([1, 2, 3, 4], [2, 3])); // false



// Wednesday - Boolean to String Conversion
// Implement a function which will convert the given boolean value into its string representation.

// Example:				Example:
// Input: boolean false		Input: boolean true
// Output: "false"			Output: “true”

// input: boolean - true or false
// convert into string using .toString()
// return output of boolean as a string

function booleanToStr(boolean){
  return boolean.toString();
}
// console.log(booleanToStr(false));

// 🗓️Thursday: Largest Swap
// Given a positive integer, find the largest number that could be generated by swapping only two digits at most once.

// Example 1: 							Example 2:
// Input: 2736							Input : 432
// Output : 7236						Output : 432
// Explanation:							Explanation:
// If we swap the number 2 and the number			Here, no swap is required. The given
// 7 then the generated number would be 			number is already the largest.
// the largest number.



// 🗓️Friday: Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:							Example 2:
// Input: n = 2							Input: n = 3
// Output: 2							Output: 3
// Explanation: There are 2 ways to the top.			Explanation: There are 3 ways to the top.
// 1. 1 step + 1 step					1. 1 step + 1 step + 1 step
// 2. 2 steps							2. 1 step + 2 steps
// 								3. 2 steps + 1 step

