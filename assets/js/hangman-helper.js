"use strict";
var hangmanHelper = (function HangmanHelper(){
	 return {
		 isAlphaKeyStroke: isAlphaKeyStroke,
		 hasRemainingGuesses: hasRemainingGuesses,
		 hasGuessedLetter: hasGuessedLetter,
		 hasWon: hasWon,
		 updateScrubbedWord: updateScrubbedWord,
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

	function updateScrubbedWord(wordModel) {
		var scrubbedArr = wordModel.scrubbedWord.split(" ");
		var wordArr = wordModel.word.split("");
		for(var i = 0; i < wordModel.word.length; i++) {
			if(wordModel.letters.includes(wordArr[i])) {
				scrubbedArr[i] = wordArr[i];
			}
		}

		wordModel.scrubbedWord = scrubbedArr.join(" ");
	}

}());
