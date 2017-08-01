"use strict";
var HangmanApp = (function HangmanView(App) {
	var message = "";
	var elements = {};

	init();

	App.View = {
		message: message,
		refreshElements: refreshElements,
		setMessage: setMessage,
	};

	return App;

	function init() {
		initElements();
	}

	function refreshElements() {
		var self = this;
		elements.wins.textContent = App.Stats.wins;
		elements.word.textContent = App.WordModel.scrubbedWord;
		elements.remaining.textContent = App.Stats.remainingGuesses;
		elements.letters.textContent = App.WordModel.lettersGuessed.join(", ").toUpperCase();
	}

	function initElements() {
		var nodeList = document.querySelectorAll(".output");
		Array.prototype.forEach.call(nodeList, function(ele) {
			elements[ele.id] = ele;
		});
	}

	function setMessage(text) {
		elements.message.textContent = text;
	}

}(HangmanApp || {}));
