"use strict";
var HangmanView = (function HangmanView(Stats, Word) {
	var message = "";
	var outputElements;

	init();

	return {
		refreshElements: refreshElements,
	}

	function init() {
		initElements();
	}

	function refreshElements() {
		var self = this;
		console.log(Word);
		outputElements[0].textContent = Stats.wins;
		outputElements[1].textContent = Word.scrubbedWord;
		outputElements[2].textContent = Stats.remainingGuesses;
		outputElements[3].textContent = Word.lettersGuessed.join(", ").toUpperCase();
	}

	function initElements() {
		outputElements = document.querySelectorAll(".output");
	}

}(HangmanStats, HangmanWord));
