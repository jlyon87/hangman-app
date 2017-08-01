"use strict";
var HangmanApp = (function HangmanStats(App) {
	var wins;
	var remainingGuesses;

	init();

	App.Stats = {
		wins: wins,
		remainingGuesses: remainingGuesses,
		hasRemainingGuesses: hasRemainingGuesses,
		setRemainingGuesses: setRemainingGuesses,
	};

	return App;

	function init() {
		wins = 0;
		remainingGuesses = 0;
	}

	function hasRemainingGuesses() {
		var self = this;
		return (self.remainingGuesses != 0);
	}

	function setRemainingGuesses() {
		var self = this;
		var wordLength = App.WordModel.word.length;
		if(wordLength > 6) {
			self.remainingGuesses = 12;
		} else {
			self.remainingGuesses = wordLength * 2;
		}
	}
}(HangmanApp || {}));
