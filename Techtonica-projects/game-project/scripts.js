// create array to hold objects of words and hints
    const wordsAndHints = [
      {word: "hello", hint: "human greeting"},
      {word: "javascript", hint: "programming language that can manipulate and validate data using HTML and CSS"},
      {word: "array", hint: "collections of ordered items and have indexes"},
      {word: "object", hint: "collections of unordered properties; properties serve the same purpose as indexes"}
    ]

// variable for word currently displaying
let displayElement = document.getElementById('displayWord').innerHTML;

// process to scramble the words
let scrambledWord = displayElement.split('');
// 


// process to display corresponding hint with word



// validation for input box

// addEventListener to wait until validation is done before submitting input (preventDefault)
// selecting input box using DOM
    const inputForm = document.getElementById('inputForm').addEventListener('submit', function(event){
        event.preventDefault();
    })

// // select input value to check against validation
//     const guess = document.getElementById('guess-input').value;
// // check if guess has same characters as scrambled word
//     if (guess.length !== displayWord.length){
//       alert("Please enter valid guess");
//     }

// button actions

// check/submit button
// function check(){
//   // check if guess input === displayWord
//     if (guess === displayWord) {
//       alert("You got it!");
//     } // DOESNT WORK
//      // } else {
//     //   alert("Try again!"); 
//     // }
// }



// score 



// reset game after round finished