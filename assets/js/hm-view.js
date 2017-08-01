"use strict";
var HangmanApp = (function HangmanView(App) {
	var message = "";
	var outputElements;

	init();

	App.View = {
		refreshElements: refreshElements,
	};

	return App;

	function init() {
		initElements();
	}

	function refreshElements() {
		var self = this;
		outputElements[0].textContent = App.Stats.wins;
		outputElements[1].textContent = App.WordModel.scrubbedWord;
		outputElements[2].textContent = App.Stats.remainingGuesses;
		outputElements[3].textContent = App.WordModel.lettersGuessed.join(", ").toUpperCase();
	}

	function initElements() {
		outputElements = document.querySelectorAll(".output");
	}

}(HangmanApp || {}));
