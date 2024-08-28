/* TUESDAY react


/* WEDNESDAY - 
Task 1
Add a property to each friend storing their initials and calculates the sum of all ages to use in calculation of average age. An average is the total of Ages divide for how many friends

Task 2
Gets an array of all friends older than the average age

Task 3
Gets an array of strings listing the initials and age

Expected output: [ 'AB: 35', 'SW: 45', 'AE: 38', 'IH: 46' ]
Task Bonus
How you can work in this programmatically (using a function) */

// A list of friends stored as an array of objects
const myFriends = [
    { firstname: 'Isma', lastname: 'Kirby', age: 27 },
    { firstname: 'Aaliya', lastname: 'Becker', age: 35 },
    { firstname: 'Adnaan', lastname: 'Tang', age: 22 },
    { firstname: 'Rafi', lastname: 'Pearson', age: 29 },
    { firstname: 'Eshaal', lastname: 'Gould', age: 29 },
    { firstname: 'Scarlett', lastname: 'Whitehead', age: 45 },
    { firstname: 'Arslan', lastname: 'Esparza', age: 38 },
    { firstname: 'Isla-Mae', lastname: 'Hastings', age: 46 },
    { firstname: 'Eamonn', lastname: 'Vang', age: 21 },
    { firstname: 'Haya', lastname: 'Mcdougall', age: 31 },
];






/* THURSDAY - Filter & Reduce

Task 1 - Using filter to Extract Specific Elements
Write a JavaScript function that uses the filter method to extract all the numbers greater than 10 from an array. */

const arrayNums = [5, 10, 12, 3, 18, 130, 44];

function filterGreaterThanTen(array){
  return array.filter(number => number > 10);
};

// console.log(filterGreaterThanTen(arrayNums));


/* Task 2 - Using reduce to Calculate the Sum of Numbers
Write a JavaScript function that uses the reduce method to calculate the sum of all numbers in an array. */

function sumNumbers(array){
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}
// console.log(sumNumbers(arrayNums));



/* Task 3 - Create an Array of Unique Categories for a Restaurant Menu (reduce)
Extract unique categories from a list of menu items. */
const menuItems = [
  { name: 'Pizza', category: 'Main Dish' },
  { name: 'Salad', category: 'Main Dish' },
  { name: 'Pasta', category: 'Main Dish' },
  { name: 'Caesar Salad', category: 'Salad' },
  { name: 'Greek Salad', category: 'Salad' },
 ];
 
 // extract categories into an array
 const allCategories = menuItems.map(item => item.category);
 // filter out duplicates using reduce
 const uniqueCategories = allCategories.reduce((acc, curr) => {
   if(!acc.includes(curr)){
     acc.push(curr)
   }
   return acc;
 }, [])



/* Task 4 - Count Coffee Shops by Neighborhood (filter)
Imagine you have collected data on various coffee shops in Chicago, including their neighborhoods. You want to analyze this data to understand the distribution of coffee shops across different neighborhoods.*/
const coffeeShops = [
  { name: 'Cafe A', neighborhood: 'Rogers Park' },
  { name: 'Cafe B', neighborhood: 'Wicker Park' },
  { name: 'Cafe C', neighborhood: 'Rogers Park' },
  { name: 'Cafe D', neighborhood: 'Wicker Park' },
  { name: 'Cafe E', neighborhood: 'Rogers Park' },
 ];
 
 // function to count coffee shops by neighborhood
 function filterShops(neighborhood){
   // filter by specific neighborhood
   const shopsInNeighborhood = coffeeShops.filter(shop => shop.neighborhood === neighborhood);
   // return count in neighborhood
   return shopsInNeighborhood.length
 }
 
 console.log('Number of coffee shops in Rogers Park: ', filterShops('Rogers Park'));
 console.log('Number of coffee shops in Wicker Park: ', filterShops('Wicker Park'));
 