//* **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:

//  * Randomly selects a word and uses the `Word` constructor to store it

//  * Prompts the user for each guess and keeps track of the user's remaining guesses

var inquirer = require("inquirer");
var Word = require("./word.js");
var wordList = ["monday", "tuesday", "wednesday"];
var chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(chosenWord);
var quizArray = new Word(chosenWord);
quizArray.arraytize();
quizArray.returnCurrentString();
var isGamefinish = false;

var correctCounter = 0;
function gameStart() {
    inquirer
        .prompt([
            {
                name: "guess",
                type: "input",
                message: "Guess a letter: "
            }
        ]).then(function (input) {
            console.log("You have just entered: " + input.guess)
            quizArray.checkInput(input.guess);
            quizArray.returnCurrentString();
            correctCounter = 0;
            for (var i = 0; i < quizArray.letterObject.length; i++) {
                if (quizArray.letterObject[i].isGuessedCorrect == true) {
                    // this damn counter is for checking how many letters are correct
                    correctCounter += 1;          
                    if (correctCounter == quizArray.letterObject.length) {
                        console.log("Congrats! You guessed ALL correct!")
                        isGamefinish = true;
                    }
                }
            }
            if (!isGamefinish) {
                gameStart();
            }
        })
}

gameStart()