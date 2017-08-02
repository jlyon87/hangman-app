"use strict";
var HangmanApp = (function HangmanWord(App) {
	var word;
	var scrubbedWord;
	var lettersGuessed;

	init();

	App.WordModel = {
		word: word,
		scrubbedWord: scrubbedWord,
		lettersGuessed: lettersGuessed,
		hasLetter: hasLetter,
		hasGuessedLetter: hasGuessedLetter,
		hasWon: hasWon,
		updateScrubbedWord: updateScrubbedWord,
		initScrubbedWord: initScrubbedWord,
		isAlphaCharacter: isAlphaCharacter,
	};

	return App;

	function init() {
		word = "";
		scrubbedWord = "";
		lettersGuessed = [];
	}

	function hasLetter(letter) {
		var self = this;
		return self.word.includes(letter);
	}

	function hasGuessedLetter(letter) {
		var self = this;
		return self.lettersGuessed.includes(letter);
	}

	function hasWon() {
		var self = this;
		return !self.scrubbedWord.includes("_");
	}

	function updateScrubbedWord() {
		var self = this;
		self.scrubbedWord = "";

		var wordArray = self.word.split("");
		var scrubbed = [];

		wordArray.forEach(function(character) {

			if(self.hasGuessedLetter(character)) {
				scrubbed.push(character);
			} else if(self.isAlphaCharacter(character)) {
				scrubbed.push("_");
			} else {
				scrubbed.push(character);
			}

			self.scrubbedWord = scrubbed.join("");
		});
	}

	function initScrubbedWord() {
		var self = this;
		var alphaPattern = /[a-zA-Z]/g;

		self.scrubbedWord = self.word.replace(alphaPattern, "_");
		// console.log(self.scrubbedWord);
		// console.log(self.scrubbedWord.length);
		// console.log(self.scrubbedWord.split(/\s/g));
	}

	function isAlphaCharacter(c) {
		// var alphaPattern = /^[a-zA-Z]+$/g;
		var alphaPattern = /[a-zA-Z]/g;
		return alphaPattern.test(c);
	}
}(HangmanApp || {}));
