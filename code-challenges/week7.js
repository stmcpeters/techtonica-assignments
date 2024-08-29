/* TUESDAY
Write a JavaScript function that takes two numbers as input and returns the larger number. Use the ternary operator (condition? valueIfTrue : valueIfFalse) for this task. */

function findLargerNumber(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// console.log(findLargerNumber(2,7)); //output: 7
// console.log(findLargerNumber(9,1)); //output: 9



/*  WEDNESDAY
Write a JavaScript function that takes two arrays as input and returns a new array that contains all elements from both input arrays. Use the spread operator (...) to achieve this. */

// input: arr1 arr2
// output: [arr1arr2]

const arr1 = ['hi',4];
const arr2 = [2, {'greeting':'goodbye'}];

function combineArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

// console.log(combineArrays(arr1, arr2)); // output: ['hi', 4, 2, {'greeting':'goodbye'}]


/* THURSDAY
Write a JavaScript function that takes an array of numbers as input and returns a new array with all duplicates removed. Use the Set object to achieve this. */

const arr3 = [1,2,2,3,4,5,5]

const arr4 = [1,2,3,4,4,5,6,7,7,8,9,10]

function removeDuplicates(array) {
  // initialize set object
  const set = new Set();
  // iterate thru array
  for (let i = 0; i < array.length; i++) {
    // add each element onto set
      set.add(array[i]);
  }
  // convert back to array instead of object
  return [...set];
}

console.log(removeDuplicates(arr3)); // [1,2,3,4,5]
console.log(removeDuplicates(arr4));
