"use strict";
var HangmanApp = (function HangmanWord(App) {
	var word;
	var scrubbedWord;
	var lettersGuessed;

	var alphaPattern = /[a-zA-Z]/g;

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

		var scrubbedArr = [];
		var wordArr = self.word.split("");
		console.log(wordArr);
		for(var i = 0; i < self.word.length; i++) {
			var letter = wordArr[i];
			// if(self.hasGuessedLetter(letter)) {
			// 	scrubbedArr[i] = letter;
			// } else if(!(alphaPattern.test(letter))) {
			// 	scrubbedArr[i] = letter;
			// }
			// console.log(self.lettersGuessed.includes(wordArr[i]));
			// console.log(!alphaPattern.test(wordArr[i]));

			if(self.hasGuessedLetter(wordArr[i])) {
				scrubbedArr[i] = (wordArr[i]);
			} else if(!alphaPattern.test(wordArr[i])) {
				scrubbedArr[i] = (wordArr[i]);
			} else {
				scrubbedArr[i] = ("_");
			}
			console.log(scrubbedArr);
		}

		self.scrubbedWord = scrubbedArr.join(" ");
	}

	function initScrubbedWord() {
		var self = this;

		self.scrubbedWord = self.word.replace(alphaPattern, "_")
			.split("")
			.join(" ");
	}
}(HangmanApp || {}));
