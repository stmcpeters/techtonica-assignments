// create array to hold objects of words and hints
    const wordsAndHints = [
      {word: "hello", hint: "human greeting"},
      {word: "javascript", hint: "programming language that can manipulate and validate data using HTML and CSS"},
      {word: "array", hint: "collections of ordered items and have indexes"},
      {word: "object", hint: "collections of unordered properties; properties serve the same purpose as indexes"}
    ]

// set global variable for word currently displaying
    const wordToScramble = document.getElementById('displayWord').innerHTML

// function to scramble word displayed
    function wordScramble() {

        // process to scramble the word
        // split() method splits word displaying into an array of chars
            let chars = wordToScramble.split('');
        // sort() randomly shuffles chars w/ comparison function of # btwn 0-1
            chars.sort(() => 0.5 - Math.random());
        // join() will join chars back together
            const scrambled = chars.join("");

        // update value for word currently displaying
            document.getElementById('displayWord').innerHTML = scrambled;

    }

// process to display corresponding hint with word



// validation for input box
    // addEventListener to text box to wait until validation is done before submitting (page reloads)
        inputForm.addEventListener('submit', function(event){
            event.preventDefault();

            // select input value to check for validation (guess is correct or not)
                const guess = document.getElementById('guess-input').value;
            // check if guessed value is equal to displayed word
                if (guess === document.getElementById('displayWord').textContent){
                    alert("You got it!");
                    score++;
                } else {
                    alert("So close! Refresh the page to try again");
                }
        })


// // button actions

// // check/submit button to begin validation on click
//     // select submit button using DOM
//         const submitBtn = document.getElementById("submit-btn");
//     // addeventlistener to activate validation when clicked
//         submitBtn.addEventListener('onclick', function(event){
//             event.correctOrNot();
//         })

// create score and display it
    // set score = 0
        let score = 0;
    //update score when it changes
        score = document.getElementById("score-display").innerText;



// reset game after round finished