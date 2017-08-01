"use strict";
var HangmanApp = (function HangmanStats(App) {
	var wins = 0;
	var remainingGuesses = 0;

	App.Stats = {
		wins: wins,
		remainingGuesses: remainingGuesses,
		hasRemainingGuesses: hasRemainingGuesses,
		setRemainingGuesses: setRemainingGuesses,
	};

	return App;

	function hasRemainingGuesses() {
		var self = this;
		return (self.remainingGuesses != 0);
	}

	function setRemainingGuesses(wordLength) {
		var self = this;
		if(wordLength > 6) {
			self.remainingGuesses = 12;
		} else {
			self.remainingGuesses = wordLength * 2;
		}
	}
}(HangmanApp || {}));
