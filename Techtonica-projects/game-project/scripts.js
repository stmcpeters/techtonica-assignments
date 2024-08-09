// create array to hold objects of words and hints
    const wordsAndHints = [
        {word: "hello", hint: "human greeting"},
        {word: "javascript", hint: "programming language that can manipulate and validate data using HTML and CSS"},
        {word: "array", hint: "collections of ordered items and have indexes"},
        {word: "object", hint: "collections of unordered properties; properties serve the same purpose as indexes"}
    ];

    
// set global variable for original version of word currently displaying
    let originalWord = document.getElementById('displayWord').textContent;
    // console.log(originalWord);

    
// function to scramble word displayed
    function wordScramble() {
        // select variable for word currently displaying
        const wordToScramble = document.getElementById('displayWord').textContent;
        // process to scramble the word
        // split() method splits word displaying into an array of chars
            let chars = wordToScramble.split('');
        // sort() randomly shuffles chars w/ comparison function of # btwn 0-1
            chars.sort(() => 0.5 - Math.random());
        // join() will join chars back together
            const scrambled = chars.join("");

        // update value for word currently displaying
            document.getElementById('displayWord').textContent = scrambled;

    }


// // process to display corresponding hint with word
// // variable for current word in word/hint array
//     let currentIndex = 0; 

//     // function randomWordAndHint() {
//     //     currentIndex = Math.floor(Math.random() * wordsAndHints.length);
//     //     const currentWord = wordsAndHints[currentIndex];
//     //     document.getElementById('displayWord').textContent = currentWord.word;
//     //     document.getElementById('hint').textContent  = currentWord.hint;
//     //     wordScramble();
//     // }

// validation for input box
    const inputForm = document.getElementById('inputForm');
    // addEventListener to text box to wait until validation is done before submitting (page reloads)
        inputForm.addEventListener('submit', function(event){
            event.preventDefault();

            // select input value to check for validation (guess is correct or not)
                const guess = document.getElementById('guess-input').value;

                console.log(`User's guess: "${guess}"`); // Log the user's guess
                console.log(`Displayed word: "${originalWord}"`); // Log the displayed word

            // check if guessed value is equal to displayed word
                if (guess.toLowerCase === originalWord.toLowerCase){
                    alert("You got it!");
                } else {
                    alert("So close! Guess again");
                }
            // wordScramble();     scrambles another word after submitting
        });


// scramble display word on page load
    // select word displayed using DOM
    // add eventlistener to scramble word when page loads
    displayWord.addEventListener('onload', wordScramble());



