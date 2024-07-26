
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
    item.appendChild(label);
    item.appendChild(checkbox);
    

});

// alert window
function showAlert() {
    alert("CAUTION: you're about to see a REALLY tasty empanada recipe, enter if you dare...");
}
// alert will pop up on window load
const alertWindow = window.addEventListener("load", showAlert);


// upload your own recipe button
// create button element
const uploadButton = document.createElement('button');
// add text to button
uploadButton.textContent = "Upload Your Own";
// select id to attach button to
const containerDiv = document.querySelector("#recipeDiv");
// append button to child of recipeDiv
containerDiv.appendChild(uploadButton);