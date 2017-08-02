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
		elements.remaining.textContent = App.Stats.remainingGuesses;
		elements.letters.textContent = App.WordModel.lettersGuessed.join(", ").toUpperCase();
		setWord();
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

	function setWord() {
		elements.word.textContent = "";
		elements.word.innerHtml = "";
		deleteChildNodes();
		buildWordEle();
	}

	function deleteChildNodes() {
		while(elements.word.firstChild) {
			elements.word.removeChild(elements.word.lastChild());
		}
	}

	function buildWordEle() {
		var spacePattern = /\s/g;
		var words = App.WordModel.scrubbedWord.split(spacePattern);
		// console.log("words", words);
		var count = 0;
		words.forEach(function(word, index) {
			if(index > 0) {
				var newSpan = createCharacterSpan(" ");
				newSpan.className = "word-display";
				elements.word.appendChild(newSpan);
				count++;
			}

			var characters = word.split("");
			characters.forEach(function(character) {
				elements.word.appendChild(createCharacterSpan(character));
				count++;
			});
		});
		// console.log("span count: ", count);
	}

	function createCharacterSpan(character, className) {
		var newSpan = document.createElement("span");
		newSpan.textContent = character;
		newSpan.className = "word-display underline";
		return newSpan;
	}

}(HangmanApp || {}));
