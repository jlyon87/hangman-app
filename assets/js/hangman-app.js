"use strict";
var HangmanApp = (function HangmanApp(Stats, Word, WordService) {

	init();

	return {
		Stats: Stats,
		Word: Word,
		enterGuess: enterGuess,
		newWord: newWord,
		checkGameStatus: checkGameStatus,
	};

	function init() {}

	function enterGuess(letter) {
		Word.lettersGuessed.push(letter);
		Stats.remainingGuesses--;

		Word.updateScrubbedWord();
		checkGameStatus();
	}

	function newWord(callback) {
		WordService.getWord()
			.then(function(fulfilled) {
				var res = JSON.parse(fulfilled);
				console.log("CHEATER!", res);

				Word.word = res.word;
				Word.initScrubbedWord();
				Word.lettersGuessed = [];
				Stats.setRemainingGuesses(Word.word.length);
				console.log(Word);
				callback();
				return res.status;
			})
			.catch(function(error) {
				console.log(error);
				return error;
			});
	}

	function checkGameStatus() {
		if(Word.hasWon()) {
			win();
		} else if(!Stats.hasRemainingGuesses()) {
			lose();
		}
	}

	function win() {
		alert("you win");
	}

	function lost() {
		alert("you lose");
	}

}(HangmanStats, HangmanWord, WordsApi));
