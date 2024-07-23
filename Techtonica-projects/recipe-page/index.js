/*
let titleHeader = document.querySelector('.title-header');

let newTitleHeader = titleHeader.querySelector('h1');
newTitleHeader.innerHTML = "hello";



let ingredientsList = document.querySelector('.ingredients-list');

ingredientsList.innerHTML = "Potatoes, Meat, Dough";
document.querySelector('ul').append(ingredientsList);
*/

var newListItem = document.createElement('li');

newListItem.textContent = 'Jalapenos';

document.querySelector('ul').appendChild(newListItem);