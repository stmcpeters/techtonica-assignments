// 🗓️Tuesday: Math methods (ceil, floor, min, max)

// Generate an array of 10 random integers between 1 and 100. 
// Then, round down half of the numbers to the nearest integer using Math.floor and round up the other half using Math.ceil.  
// Finally, find the minimum and maximum values among the rounded numbers.

  // assign variable to hold array
  // let randomArr = [];
  // // use for loop to push numbers in array
  // for (let i = 0; i < 10; i++){
  //    // random array 1-100 using Math.random() * 99
  //    console.log(randomArr.push(Math.random() * 100));

  // }

  // let randomArr = [];
  // for (let i = 0; i < 10; i++){
  //   randomArr.push(Math.random() * 100);
  //   //randomArr;
  // }
  // console.log(randomArr);


// round half of numbers up using Math.ceil
// round other half down using Math.floor
// find min and max of rounded numbers


// Wednesday Jest Unit & Integration Testing
// You have been given a simple application consisting of a service module and a controller module, you need to write tests for both files using Jest.

// Application Structure
// Imagine we have a simple application that fetches user data from an API and displays it. Our application consists of two parts:

// Service Module (userService.js): Responsible for fetching user data from an API.
// Controller Module (userController.js): Uses the service to fetch user data and sends it to the view.
// Create the Following Test Files:
// Create an unit tests for UserService to verify that the service correctly fetches user data and handles errors. Simulate a network requests without actually making HTTP calls (userService.test.js).
// Create an integration test for UserController to verify that the controller correctly delegates the request to the service and passes the response along. This test should ensure that the interaction between the controller and the service works as expected (userController.test.js)
// Running Your Tests
// You will need to run the following commands: npm install --save-dev jest and npm run test to run your tests.




// 🗓️Thursday: Working with Arrays & Objects
// Create a function named filterObjects that takes two arguments: an array of objects (data) and a string representing a property name (propertyName). The function should return a new array containing only the objects from the original array whose value for the specified property matches the provided value. If no objects match the criteria, the function should return an empty array.

//input: array of objects, propName (age, name, hobby), value passed param and need to find if there's a key paired

let data = [
  {name: 'bob', age: 20, hobby: 'skating'},
  {name: 'joe', age: 36, hobby: 'stamp collecting'}, 
  {name: 'ken', age: 41, hobby: 'painting'}];

function findAge(data, propName, value){
  return data.filter((obj) => obj[`${propName}`] === value);
}

console.log(findAge(data, 'name', 'bob'));
console.log(findAge(data, 'age', 41));
console.log(findAge(data, 'name', 'matt'));


