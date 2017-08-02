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
		App.View.updateStatusIcon("fa fa-spinner text-info");
		App.Hangman.newWord();
		onKeyupListener();
	}

	function reset() {
		App.View.setMessage("Loading...");
		App.View.updateStatusIcon("fa fa-spinner text-info");
		App.Hangman.newWord();
		onKeyupListener();
	}

	function onKeyupListener() {
		document.onkeyup = function(evt) {

			console.log(evt.key);
			console.log(evt.keyCode);

			if(isAlphaKeyStroke(evt.keyCode)) {

				App.Hangman.enterGuess(evt.key);
				App.View.refreshElements();
			} else if(isEnterKeyStroke(evt.keyCode)) {
				reset();
			}
		};
	}

	function isAlphaKeyStroke(keyCode) {
 		return (keyCode >= 65 && keyCode <= 90);
 	}

	function isEnterKeyStroke(keyCode) {
		return (keyCode === 13);
	}
}(HangmanApp || {}));
