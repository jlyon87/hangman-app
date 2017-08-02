"use strict";
var HangmanApp = (function HangmanController(App) {

	init();

	App.Controller = {
		start: start,
		reset: reset,
	}

	return App;

	function init() {

	}

	function start() {
		App.View.setMessage("Loading...");
		App.Hangman.newWord();
		onKeyupListener();
	}

	function reset() {
		App.View.setMessage("Loading...");
		App.Hangman.newWord();
		onKeyupListener();
	}

	function onKeyupListener() {
		document.onkeyup = function(evt) {

			if(isAlphaKeyStroke(evt.keyCode)) {

				App.Hangman.enterGuess(evt.key);
				App.View.refreshElements();
			}
		};
	}

	function isAlphaKeyStroke(keyCode) {
 		return (keyCode >= 65 && keyCode <= 90);
 	}
}(HangmanApp || {}));
