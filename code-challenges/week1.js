// TUESDAY - SPLICE AND SLICE
/*
You are given two arrays and an index. Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.

Examples
frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].

frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

frankenSpice([1, 2, 3], [], 1) should return [1, 2, 3]

All elements from the first array should be added to the second array in their original order. frankenSplice([1, 2, 3, 4], [], 0) should return [1, 2, 3, 4].
The first array should remain the same after the function runs.
The second array should remain the same after the function runs.

sandwhich (second array is the buns, first array is filling) / zipper
starting index is final param
*/


// WEDNESDAY - REVERSE A STRING
/*
Reverse the provided string and return the reversed string. For example, "hello" should become "olleh".

Examples
reverseString("hello") should return a string.
reverseString("hello") should return the string olleh.
reverseString("Howdy") should return the string ydwoH.
reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.
*/

// THURSDAY - FIND ALL ANAGRAMS IN A STRING
/*
An anagram is a word formed by rearranging the letters of a different word using all the original letters exactly once. The function is given two strings: s - to search in, p - a template word. Find the starting indexes of anagrams of p among substrings of the given s.

Examples
findAnagrams("cbaebabacd", "abc") ➞ [0, 6]
// Anagrams: "cba", "bac"

findAnagrams("abab", "ab") ➞ [0, 1, 2]
// Anagrams: "ab", "ba", "ab"

Pseudocode
// use an empty array to track
// track if p is longer than s
// sort things (template string - p) in ABC order
// iterate through the string s
    // pull on the current window
    // sort existing window & compare with sorted template
// return array

*/

function findAnagrams(s, p){
  // use an empty array to track
  const result = [];
  const pLength = p.length;
  const sLength = s.length;
  
  // track if p is longer than s
  if(pLength > sLength) return [];
  
  // sort things (template string - p) in ABC order
  const sortP = [...p].sort().join('');
  
  // iterate through the string s
  for (let i = 0; i <= sLength - pLength; i++){
    // establish the current window
    const window = s.slice(i, i + pLength);
    console.log(window);
    // sort existing window & compare with sorted template
    const sortWindow = [...window].sort().join('');
    if(sortP === sortWindow){
      result.push(i);
    }
  }
  // return array
  return result;
}

// console.log(findAnagrams("cbaebabacd", "abc"));// [0, 6];
// console.log(findAnagrams("abab", "ab")); // [0, 1, 2];
// console.log(findAnagrams('a', 'ab')); // [];
console.log(findAnagrams('racecar', 'ace')); 