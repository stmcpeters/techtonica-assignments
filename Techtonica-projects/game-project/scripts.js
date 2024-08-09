// create array to hold objects of words and hints
    const wordsAndHints = [
        {word: "hello", hint: "Hint: human greeting"},
        {word: "javascript", hint: "Hint: programming language that can dynamically manipulate data using HTML and CSS"},
        {word: "array", hint: "Hint: collections of ordered items and have indexes"},
        {word: "object", hint: "Hint: collections of unordered properties; has properties instead of indexes"}
    ];

    
// set global variable for original version of word currently displaying
    let originalWord = '';


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

function displayRandomWordAndHint() {
    const randomIndex = Math.floor(Math.random() * wordsAndHints.length);
    const selectedWordAndHint = wordsAndHints[randomIndex];
    document.getElementById('displayWord').textContent = selectedWordAndHint.word;
    document.getElementById('hint').textContent = selectedWordAndHint.hint;
    originalWord = selectedWordAndHint.word;


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
                if (guess.toLowerCase() === originalWord.toLowerCase()){
                    alert("You got it!");
                    newRound();   
                // } else if (guess === ''){
                //     alert("Please enter valid word");
                } else {         
                    alert("So close! Guess again");
                }
        });
}
// get word to scramble on page load
// scramble display word
    // select word displayed using DOM
    // add eventlistener to scramble word when page loads
    window.onload = function() {
        displayRandomWordAndHint();
        wordScramble();
        document.getElementById('inputForm').reset();
    };


// reset game after round
    // clear input box
    // get new word and hint combo
    // scramble display word
    function newRound() {
        document.getElementById('inputForm').reset();
        displayRandomWordAndHint();
        wordScramble();
    }
