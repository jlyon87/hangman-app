var HangmanWord = (function HangmanWord() {
	var word;
	var scrubbedWord;
	var lettersGuessed;

	return {
		word: word,
		scrubbedWord: scrubbedWord,
		lettersGuessed: lettersGuessed,
		hasGuessedLetter: hasGuessedLetter,
		hasWon: hasWon,
		updateScrubbedWord: updateScrubbedWord,
		initScrubbedWord: initScrubbedWord,
	};

	function hasGuessedLetter(letter) {
		return lettersGuessed.includes(letter);
	}

	function hasWon() {
		return !scrubbedWord.includes("_");
	}

	function updateScrubbedWord() {}

	function initScrubbedWord() {}
}());
