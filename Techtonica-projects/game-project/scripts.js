// create array to hold objects of words and hints
    const wordsAndHints = [
      {word: "hello", hint: "human greeting"},
      {word: "javascript", hint: "programming language that can manipulate and validate data using HTML and CSS"},
      {word: "array", hint: "collections of ordered items and have indexes"},
      {word: "object", hint: "collections of unordered properties; properties serve the same purpose as indexes"}
    ]

// function to scramble word displayed
function wordScramble() {
    // select value for word currently displaying
        const wordToScramble = document.getElementById('displayWord').innerHTML
    // process to scramble the word
    // split() method splits word displaying into an array of chars
        let chars = wordToScramble.split('');
    // sort() randomly shuffles chars w/ comparison function of # btwn 0-1
        chars.sort(() => 0.5 - Math.random());
    // join() will join chars back together
        const scrambled = chars.join("");

    // update value for word currently displaying
        document.getElementById('displayWord').inneqrHTML = scrambled;

}

// process to display corresponding hint with word



// validation for input box

// addEventListener to input box to wait until validation is done before submitting input (preventDefault)
// selecting input box using DOM
    const inputForm = document.getElementById('inputForm');
    // addEventListener to text box to wait until validation is done before submitting
    inputForm.addEventListener('submit', function(event){
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