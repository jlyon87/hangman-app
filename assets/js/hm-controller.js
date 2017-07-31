"use strict";
var HangmanController = (function HangmanController(App, View) {

	init();

	return {
		start: start,
		reset: reset,
	};

	function init() {
		App.newWord(View.refreshElements);
	}

	function start() {
		onKeyupListener();
	}

	function reset() {
		App.newWord(View.refreshElements);
	}

	function onKeyupListener() {
		document.onkeyup = function(evt) {

			if(isAlphaKeyStroke(evt.keyCode)) {

				App.enterGuess(evt.key);
				View.refreshElements();
			}
		};
	}

	function isAlphaKeyStroke(keyCode) {
 		return (keyCode >= 65 && keyCode <= 90);
 	}
}(HangmanApp, HangmanView));
