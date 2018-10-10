//* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. 
//This is used to create an object representing the current word the user is attempting to guess. 
//That means the constructor should define:

//* An array of `new` Letter objects representing the letters of the underlying word

//* A function that returns a string representing the word. This should call the function on each letter object 
//(the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//* A function that takes a character as an argument and calls the guess function on each letter object 
//(the second function defined in `Letter.js`)


var Letter = require("./letter.js");
var displayCurrentArray = [];

function Word(chosenWord) {
    this.letterObject = [];
    this.arraytize = function () {
        var chosenWordArray = chosenWord.split("");
        for (var i = 0; i < chosenWordArray.length; i++) {
            this.letterObject.push(new Letter(chosenWordArray[i]));
        };
        // console.log(this.letterObject);
    };
    this.returnCurrentString = function () {
        displayCurrentArray = [];
        this.letterObject.forEach(function (letter) {
            
            displayCurrentArray.push(letter.processingLetter());
        })
        console.log(displayCurrentArray);
        // console.log(this.letterObject);
       
    };
    this.checkInput = function (input) {
        this.letterObject.forEach(function (letter) {
            letter.checkInputLetter(input);
        })
    }
}

module.exports = Word;
