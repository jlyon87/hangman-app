"use strict";
var hangmanHelper = (function HangmanHelper(){
	 return {
		 isAlphaKeyStroke: isAlphaKeyStroke,
		 hasRemainingGuesses: hasRemainingGuesses,
		 hasGuessedLetter: hasGuessedLetter,
		 hasWon: hasWon,
	 };

	 function isAlphaKeyStroke(keyCode) {
 		return (keyCode >= 65 && keyCode <= 90);
 	}

 	function hasRemainingGuesses(remaining) {
 		return (remaining != 0);
 	}

 	function hasGuessedLetter(letters, letter) {
 		return letters.includes(letter);
 	}

 	function hasWon(scrubbedWord) {
 		return !scrubbedWord.includes("_");
 	}
}());
