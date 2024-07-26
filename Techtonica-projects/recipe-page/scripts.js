// plans 
// create checkboxes for ingredients that user can check 


// selecting filling ingredients
// const ingredientsHeader = document.getElementById('ingredient-header');
// console.log(ingredientsHeader);

// // selecting filling ingredients list items
// const ingredientsList = document.getElementsByClassName('list-items');
// console.log(ingredientsList);

// // selecting list items in ingredients list
// const listItems = document.getElementsByTagName('li');
// console.log(listItems);

// queryselector selects by tag name, id, class, etc
// select specifically ingredients div
// const ingredients = document.querySelector('div.ingredients');
// console.log(ingredients);

// changing styles of elements
// select filling ingredients header and change font-color to green
// const header = document.querySelector('#ingredient-header');
// header.style.color = 'green';
// console.log(header);

// creating new element within existing elements
//     // select existing unordered list for ingredients 
//     const ul = document.querySelector('.ingredient-list');
//     // create new list element within
//     const li = document.createElement('li');
//     // modify text of new list item
//     li.innerText = "Chicken";
//     // appends new list item to ingredients unordered list
//     ul.append(li);




// adding checkbox to ingredients list
const ingredientsList = document.querySelector("#ingredients");

// iterate over each <li> element
ingredientsList.querySelectorAll('.list-items').forEach(item => {

    // creating checkbox element
    let checkbox = document.createElement("input");
        //assign attributes to checkboxes
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = "id" + item.textContent;

    // creating label for checkbox
    let label = document.createElement("label");
    // assigning attributes for the created label tag
    label.htmlFor = "id" + item.textContent;

    // // appending the created text to the created label tag
    // label.appendChild(
    //   document.createTextNode(item.textContent)
    // );

    // appending the checkbox + label to item
    item.appendChild(checkbox);
    item.appendChild(label);

});
