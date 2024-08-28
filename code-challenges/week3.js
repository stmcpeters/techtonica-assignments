/* TUESDAY - Display Username in Greeting

/*
Prompt a user for their name and then display a greeting message that repeats the name a specified number of times. Practice using concat, join, and repeat.

You may also need some of the following (but not required): 
- parseInt
- isNaN
- new Array()
*/

// Do not remove the below line
const prompt = require("prompt-sync")(); 
// Do not remove the above line

function askForNameAndRepeat() {

    // Convert the repeat count to an integer if it's not already
    
    // Check if the repeat count is a number and greater than zero
    
    // Create an array filled with the user's name, repeated the desired number of times
    
    // Use concat to combine the repeated names into one string


}

askForNameAndRepeat();


// WEDNESDAY - Loops https://www.hackerrank.com/challenges/js10-loops/topics/javascript-loops

// THURSDAY - JS Challenges

/* [Challenge 1] - Convert Inches to Meters
Define a function called metersToInches that takes an input of the number of meters and outputs the result of the number of inches.

Hint: 1 meter equals 39.3701 inches.

Results
input	value
metersToInches(0)	0
metersToInches(1)	39.3701
metersToInches(1.5)	59.05515
metersToInches(15.6)	614.17356
[Challenge 2] - Loop n Times
Write a function named loopThrough that takes an argument that is a number and loops through and displays a message “Hello World” that number of times.

Results
input	value
loopThrough(0)	Nothing displayed
loopThrough(1)	Message displayed 1 time
loopThrough(3)	Message displayed 3 times
[Challenge 3] - Number sum
Define a function called calculateSum to calculate the sum all the digits from 0 to an input number.

input	value
calculateSum(0)	0
calculateSum(1)	1
calculateSum(3)	6
calculateSum(10)	55
[Challenge 4] - FizzBuzz
Write a function called fizzbuzz that prints each number from 1 to the input on a new line.

For each multiple of 3, print "Fizz" instead of the number.
For each multiple of 5, print "Buzz" instead of the number.
For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
Results
fizzbuzz(0)
Will result in the following (no) output:


fizzbuzz(16)
Will result in the following output

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
[Challenge 5] Calculate Factorial Number
A factorial number is the concept in math by value of multiplying numbers by each consecutively smaller number.

For example, the value of 3 factorial, is 6, which can be calculated by:

3 * 2 * 1
The value of 10 factorial, for example, can be calculated by:

10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
[Challenge 6] Switch Statements
Using a switch statement, write a function called sleep_in(weekday, vacation) with these criteria: The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.

Results
sleep_in(false, false) → true

sleep_in(true, false) → false

sleep_in(false, true) → true

[Challenge 7] Accessing Arrays
Write a function called common(a, b) with these criteria: Given 2 arrays of ints, a and b, return True if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

Results
common([1, 2, 3], [7, 3]) → True

common([1, 2, 3], [7, 3, 2]) → False

common([1, 2, 3], [1, 3]) → True

[Challenge 8] Object Keys and Values
Create an object with two key-value pairs.

Log that object to the console.

Delete the first key-value pair in the object.

Log that object to the console again. The first key-value pair should be gone.

[Challenge 9] Mutating Objects
Create an array of objects with at least 2 key value pairs. The objects should all have the same keys, and the array should contain at least 3 objects.

Create a function that accepts the array of objects as an argument.

Print the value of the second key in each object to the console. Use dot-notation to access the values.

After printing the values in step 3, change the values of the second key in every object to something new.

Prove the change worked by printing the second key in each object to the console, which should show the new value. Use bracket-notation to access the values this time.

[Challenge 10] Determine Runtime Complexity
At the top your document for each challenge, state the runtime complexity for that function. */