
//define variables
var words= ["thor"];
var chosenWord = "";
var lettersChosenWord =[];
var numBlanks =0;
var underscore=[];
var wrongGuesses=[];
var letterGuessed= "";


// Game counters
var winCounter = 0;
var lossCounter = 0;
var remainingGuesses=9;



function startGame() {

remainingGuesses = 9;

//get random word
chosenWord = words[Math.floor(Math.random() * words.length)];


//seperate each letter of chosenWord and push to an array
lettersChosenWord = chosenWord.split("");

console.log(chosenWord);


numBlanks = lettersChosenWord.length;

//reset underscore
underscore = [];

//reset wrong guesses
wrongGuesses = [];

//create blanks for chosen word

for (var i = 0; i < numBlanks; i++) {
    underscore.push("_");
  }

console.log(underscore);

//print variables to HTML
document.getElementById("under-score").innerHTML = underscore.join(" ");
document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
}

//document.getElementById("wins").innerHTML = wins;

//check if the letter that user guesses is right
//if right, display the letter in the guessed word
//if wrong, display the letter in the letters already guessed
//if wrong, update remainingGuesses -1
function checkLetters (letter) {
    var rightLetter = false;

    for (var i = 0; i< numBlanks; i++){
        if (chosenWord[i] === letter) {
            rightLetter = true;
        }
    }

    if (rightLetter) {
        for (var j = 0; j < numBlanks; j++) {
            if (chosenWord[j] === letter) {
                underscore[j] = letter;
            }
        }
    console.log(underscore);
    }

    else {
    wrongGuesses.push(letter);
    remainingGuesses --;
    }
}





function roundComplete() {
    // First, log an initial status update in the console
    // telling us how many wins, losses, and guesses are left.
    console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + remainingGuesses);
    // HTML UPDATES
    // ============
    // Update the HTML to reflect the new number of guesses.
    document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
    // This will print the array of guesses and blanks onto the page.
    document.getElementById("under-score").innerHTML = underscore.join(" ");
    // This will print the wrong guesses onto the page.
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
    // If our Word Guess string equals the solution.
    // (meaning that we guessed all the letters to match the solution)...
    if (lettersChosenWord.toString() === underscore.toString()) {
    // Add to the win counter
    winCounter++;
    // Give the user an alert
    alert("You win!");
    // Update the win counter in the HTML
    document.getElementById("wins").innerHTML = winCounter;
    // Restart the game
    startGame();
    }
    // If we've run out of guesses
    else if (remainingGuesses === 0) {
    // Add to the loss counter
    lossCounter++;
    // Give the user an alert
    alert("You lose");
    // Update the loss counter in the HTML
    document.getElementById("losses").innerHTML = lossCounter;
    // Restart the game
    startGame();
        }
    }
    // MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
    // =================================================================
    
    
    // Starts the Game by running the startGame() function
    startGame();
    // Then initiates the function for capturing key clicks.
    document.onkeyup = function(event) {
    // Converts all key clicks to lowercase letters.
    letterGuessed = String.fromCharCode(event.which).toLowerCase();
    // Runs the code to check for correct guesses.
    checkLetters(letterGuessed);
    // Runs the code that ends each round.
    roundComplete();
    };