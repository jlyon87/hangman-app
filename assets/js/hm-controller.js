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
		App.View.updateStatusIcon("fa fa-gear fa-spin text-info");
		App.Hangman.newWord();
		onKeyupListener();
	}

	function reset() {
		App.View.setMessage("Loading...");
		App.View.updateStatusIcon("fa fa-gear fa-spin text-info");
		App.Hangman.newWord();
		onKeyupListener();
	}

	function onKeyupListener() {
		document.onkeyup = function(evt) {

			if(isAlphaKeyStroke(evt.keyCode)) {

				var status = App.Hangman.enterGuess(evt.key);
				App.View.refreshElements();
				checkStatus(status);
			}
		};
	}

	function isAlphaKeyStroke(keyCode) {
 		return (keyCode >= 65 && keyCode <= 90);
 	}

	function isEnterKeyStroke(keyCode) {
		return (keyCode === 13);
	}

	function checkStatus(status) {
		if(status === 1 || status === 2) {
			document.onkeyup = function(evt) {
				if(isEnterKeyStroke(evt.keyCode)) {
					reset();
				}
			}
		}
	}
}(HangmanApp || {}));
