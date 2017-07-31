"use strict";
var HangmanStats = (function HangmanStats() {
	var wins = 0;
	var remainingGuesses = 0;

	return {
		wins: wins,
		remainingGuesses: remainingGuesses,
		hasRemainingGuesses: hasRemainingGuesses,
		setRemainingGuesses: setRemainingGuesses,
	};

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
}());
