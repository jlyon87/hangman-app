"use strict";
var wordsApi = (function WordsApi() {
	const config = {
		uri: "https://wordsapiv1.p.mashape.com/words/?random=true",
		key: "",
	};

	return {
		getWord: getWord,
	};

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

	function requestWord(cb) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", config.uri);
		xhr.setRequestHeader("X-Mashape-Key", config.key);

		xhr.onreadystatechange = function() {
			if(xhr.readyState === XMLHttpRequest.DONE) {
				cb(xhr);
			}
		};

		return xhr.send();
	}

}());
