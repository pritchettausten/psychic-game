var computerChoices = ["a","b","c","d","e","f","g","h","i","j",
				 	   "k","l","m","n","o","p","q","r","s","t",
				 	   "u","v","w","x","y","z"]

var wins = 0;
var losses = 0;
var guessesLeft = 10;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

var updateLetterToGuess = function() {
	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

var reset = function() {
	guessesLeft = 10;
	updateLetterToGuess();
	document.getElementById("guesses").innerHTML = "";
	document.getElementById("guessesLeft").innerHTML = "10";
	console.log(computerGuess);
};

document.onkeyup = function(event){
	var userGuess = event.key;

	if (userGuess===computerGuess){
		wins++;
		document.getElementById("wins").innerHTML = wins;
		reset();
	}else if (guessesLeft === 1){
		losses++;
		document.getElementById("losses").innerHTML = losses;
		reset();
	}
	else{
		guessesLeft--;
		document.getElementById("guesses").append(userGuess + ", ");
		document.getElementById("guessesLeft").innerHTML = guessesLeft;
	}
}

