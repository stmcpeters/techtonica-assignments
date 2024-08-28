/* TUESDAY
1️⃣ Uppercase String Promise
Implement a function that takes a string and returns a promise. The promise should resolve with the uppercase version of the string, but reject if the string is null.

2️⃣ Simulated Data Fetching
Create a function that simulates fetching data from a server. This function should return a promise that resolves after a simulated delay, mimicking the asynchronous nature of fetching data.

3️⃣ [Bonus] Asynchronous Request Queue
Implement a queue system that manages the execution of tasks, ensuring that no more than a specified number of tasks run at the same time. The queue should execute tasks in the order they were added, and when a task completes, the next task in the queue should start.

Create a Queue Class: Define a class AsyncQueue that takes a concurrencyLimit as a parameter. This class will manage the tasks.
Implement Queue Methods:
enqueue(task): Adds a task to the queue.
runNext(): Executes the next task in the queue if the concurrency limit is not reached.
Manage Task Execution: Ensure that the queue only runs a maximum number of tasks concurrently, as specified by concurrencyLimit. When a task completes, check if there are more tasks in the queue and run the next one if possible.
Test the Queue: Create several tasks that simulate asynchronous operations with different durations. Add these tasks to the queue and observe if the queue correctly limits the concurrency and processes tasks in the order they were added.

/* =========== Uppercase String Promise =========== */

function uppercaseString(str) {

}


/* ========== Simulated Data Fetching ========== */

function fetchData() {

}


/* ========== Asynchronous Request Queue ========== */

class AsyncQueue {
    constructor() {

    }

}

// // Example task factory function
// const createTask = () => {

// };

// // Create a queue with a concurrency limit of 3

// // Add tasks to the queue


// WEDNESDAY

// Sorting an Array of Objects by a Key [Sort]
const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
 ];

 
 
 // Checking if Any Element in an Array Meets a Condition [Some]
 const numbers = [1, 2, 3, 4, 5];
 
 
 
 
 // Checking if All Elements in an Array Meet a Condition [Every]
 const evenNumbers = [2, 4, 6, 8, 10];


// THURSDAY
// 1️⃣ Iterating Over the Values of an Object [Object.values]
const user1 = { name: 'Alice', age: 30, city: 'New York' };

// 2️⃣  Iterating Over the Keys of an Object [Object.keys]
const user2 = { name: 'Alice', age: 30, city: 'New York' };

//3️⃣ Iterate over an Array of Strings [For Of]
// Define an array of strings
const fruits = ['apple', 'banana', 'cherry'];
