var HangmanStats = (function HangmanStats() {
	var wins = 0;
	var remainingGuesses;

	return {
		wins: wins,
		remainingGuesses: remainingGuesses,
		hasRemainingGuesses: hasRemainingGuesses,
		setRemainingGuesses: setRemainingGuesses,
	};

	function hasRemainingGuesses() {
		return (remainingGuesses != 0);
	}

	function setRemainingGuesses(wordLength) {
		if(wordLength > 6) {
			remainingGuesses = 12
		} else {
			remainingGuesses = wordLength * 2;
		}
	}
}());
