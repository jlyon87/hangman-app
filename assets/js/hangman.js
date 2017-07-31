"use strict";
var hangmanApp = (function HangmanApp(wordService, helper) {
	var wordModel = {};
	var stats = {};
	var outputElements;

	init();

	return {
		start: start,
		reset: reset
	};

	function init() {
		stats.wins = 0;
		newWord();
	}

	function start() {
		onKeyupListener();
	}

	function reset() {
		newWord();
	}

	function onKeyupListener() {
		document.onkeyup = function(evt) {

			if(helper.isAlphaKeyStroke(evt.keyCode) && !helper.hasGuessedLetter(wordModel.letters, evt.key)) {

				if(helper.hasRemainingGuesses(stats.remaining)) {
					enterGuess(evt.key);
				}
			}

			if(helper.hasWon(wordModel.scrubbedWord)) {
				stats.wins++;
				refreshElements();
			}
		};
	}

	function enterGuess(letter) {
		wordModel.letters.push(letter);
		stats.remaining--;

		helper.updateScrubbedWord(wordModel);
		checkGameStatus();
		refreshElements();
	}

	function updateScrubbedWord(wordModel) {
		var scrubbedArr = wordModel.scrubbedWord.split(" ");
		var wordArr = wordModel.word.split("");
		for(var i = 0; i < wordModel.word.length; i++) {
			if(wordModel.letters.includes(wordArr[i])) {
				scrubbedArr[i] = wordArr[i];
			}
		}

		wordModel.scrubbedWord = scrubbedArr.join(" ");
	}

	function refreshElements() {
		outputElements[0].textContent = stats.wins;
		outputElements[1].textContent = wordModel.scrubbedWord;
		outputElements[2].textContent = stats.remaining;
		outputElements[3].textContent = wordModel.letters.join(", ").toUpperCase();
	}

	function newWord() {
		wordService.getWord()
			.then(function(fulfilled) {
				var res = JSON.parse(fulfilled);
				console.log("CHEATER!", res);

				wordModel.word = res.word;
				wordModel.scrubbedWord = initScrubbedWord();
				wordModel.letters = [];
				stats.remaining = setRemainingGuesses();

				initElements();
			})
			.catch(function(error) {
				console.log(error);
				return error;
			});
	}

	function checkGameStatus() {
		if(helper.hasWon(wordModel.scrubbedWord)) {
			win();
		} else if(!helper.hasRemainingGuesses(stats.remaining)) {
			lose();
		}
	}

	function win() {
		// Add Win Panel
		alert("You win!");
		reset();
	}

	function lose() {
		// Add Lose Panel
		alert("You Lose!");
		reset();
	}

	function initElements() {
		outputElements = document.querySelectorAll(".output");
		refreshElements();
	}

	function initScrubbedWord() {
		return wordModel.word.split("").reduce(function(acc) {
				return acc.concat("_");
		}, []).join(" ");
	}

	function setRemainingGuesses() {
		var guesses;
		if(wordModel.word.length > 6) {
			guesses = 12
		} else {
			guesses = wordModel.word.length * 2;
		}

		return guesses;
	}

})(wordsApi, hangmanHelper);
