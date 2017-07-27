var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 10;
var guessedLetters = [];


    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice);



   // When the user presses a key, it will run the following function...
document.onkeypress = function(event) {
    var userGuess = event.key;
guessedLetters.push(userGuess);
 
 

    if(userGuess === computerChoice){
        wins++;
        guesses = 10;
        guessedLetters = [];
        alert("Correct, you win!");
        v

    }else{
        guesses--;
    }

    if(guesses === 0){
        losses++
        alert("Sorry, you lose!");
        guesses = 10;
        guessedLetters = []
 


    }

    
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "<h2>losses:</h2> " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
    document.querySelector('#wrong').innerHTML = "Letters you've guessed: " + guessedLetters.join(' ');
}

