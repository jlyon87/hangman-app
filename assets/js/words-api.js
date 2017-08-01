"use strict";
var HangmanApp = (function WordsApi(App) {
	const config = {
		uri: "https://wordsapiv1.p.mashape.com/words/?random=true",
		key: "zpsiMlRUNLmshLpq8JMxpSt9BoUPp1tDj25jsnlKkH15pEsBnZ",
	};

	App.WordService = {
		getWord: getWord,
	};

	return App;

	function getWord() {
		return new Promise(function(resolve, reject) {
			requestWord(function(xhr) {
				if(xhr.status === 200) {
					resolve(xhr.response);
				} else {
					var reason = new Error('Failed to retrieve a word.');
					reject(reason);
				}
			});
		});
	}

	function requestWord(callback) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", config.uri);
		xhr.setRequestHeader("X-Mashape-Key", config.key);

		xhr.onreadystatechange = function() {
			if(xhr.readyState === XMLHttpRequest.DONE) {
				callback(xhr);
			}
		};

		return xhr.send();
	}

}(HangmanApp || {}));
