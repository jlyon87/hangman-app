"use strict";
var HangmanApp = (function HangmanApp(App) {

	init();

	App.Hangman = {
		enterGuess: enterGuess,
		newWord: newWord,
		checkGameStatus: checkGameStatus,
	};
	return App;

	function init() {}

	function enterGuess(letter) {
		var self = this;
		if(!App.WordModel.hasLetter(letter) && !App.WordModel.hasGuessedLetter(letter)) {
			App.Stats.remainingGuesses--;
		}

		if(!App.WordModel.hasGuessedLetter(letter)) {
			App.WordModel.lettersGuessed.push(letter);
			App.WordModel.updateScrubbedWord();
		}

		self.checkGameStatus();
	}

	function newWord(callback) {
		App.WordService.getWord()
			.then(function(fulfilled) {
				var res = JSON.parse(fulfilled);
				console.log("CHEATER!", res);

				App.View.setMessage("");

				if(res.results && res.results[0].definition) {
					App.View.setMessage("HINT: " + res.results[0].definition);
				}

				App.WordModel.word = res.word;
				App.WordModel.initScrubbedWord();
				App.WordModel.lettersGuessed = [];
				App.Stats.setRemainingGuesses();
				App.View.refreshElements();
			})
			.catch(function(error) {
				console.log(error);
				return error;
			});
	}

	function checkGameStatus() {
		if(App.WordModel.hasWon()) {
			win();
		} else if(!App.Stats.hasRemainingGuesses()) {
			lose();
		}
	}

	function win() {
		App.View.setMessage("You Win! Press Reset to play again!");
		App.Stats.wins++;
		document.onkeyup = function() {};
	}

	function lose() {
		App.View.setMessage("You Lose! Press Reset to play again!");
		document.onkeyup = function() {};
	}

}(HangmanApp || {}));
