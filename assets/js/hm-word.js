"use strict";
var HangmanApp = (function HangmanWord(App) {
	var word = "";
	var scrubbedWord = "";
	var lettersGuessed = [];

	App.WordModel = {
		word: word,
		scrubbedWord: scrubbedWord,
		lettersGuessed: lettersGuessed,
		hasGuessedLetter: hasGuessedLetter,
		hasWon: hasWon,
		updateScrubbedWord: updateScrubbedWord,
		initScrubbedWord: initScrubbedWord,
	};

	return App;

	function hasGuessedLetter(letter) {
		const self = this;
		return self.lettersGuessed.includes(letter);
	}

	function hasWon() {
		var self = this;
		return !self.scrubbedWord.includes("_");
	}

	function updateScrubbedWord() {
		var self = this;
		var scrubbedArr = self.scrubbedWord.split(" ");
		var wordArr = self.word.split("");
		for(var i = 0; i < self.word.length; i++) {
			if(self.lettersGuessed.includes(wordArr[i])) {
				scrubbedArr[i] = wordArr[i];
			}
		}

		self.scrubbedWord = scrubbedArr.join(" ");
	}

	function initScrubbedWord() {
		var self = this;
		var pattern = /[a-zA-Z]/g;

		self.scrubbedWord = self.word.replace(pattern, "_")
			.split("")
			.join(" ");
	}
}(HangmanApp || {}));
