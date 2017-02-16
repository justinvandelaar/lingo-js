var rand;
var numberOfSubmits
Array.prototype.allValuesSame = function() {

    for(var i = 1; i < this.length; i++)
    {
        if(this[i] !== this[0])
            return false;
    }

    return true;
}

function firstLetter(word) {
	numberOfSubmits = 1;
	rand = words[Math.floor(Math.random() * words.length)];
	this.word = rand;
	var ok = document.getElementsByClassName(numberOfSubmits)
	ok[0].value = rand[0];
}

function checkWord() {
		var currentLingoDiv = document.getElementById("Lingo" + numberOfSubmits).getElementsByTagName("input");

		var geheime_letters = rand.split("");

		for (var i = 0, len = currentLingoDiv.length; i < len; i ++) {
				var geraden_letter = currentLingoDiv[i].value
			    var geheime_letter = geheime_letters[i];

				if (numberOfSubmits == 5) {
					var setRead = document.getElementById("Lingo" + numberOfSubmits).getElementsByClassName(numberOfSubmits)[i];
					setRead.setAttribute("readonly", "true");
				 	var weghalen = numberOfSubmitits = 1;
				 	var div = document.getElementById("Lingo" + weghalen).getElementsByClassName(weghalen);
					div[i].removeAttribute("readonly");
				}
				else {
					var setRead = document.getElementById("Lingo" + numberOfSubmits).getElementsByClassName(numberOfSubmits)[i];
					setRead.setAttribute("readonly", "true");
					var weghalen = numberOfSubmits + 1;
					var div = document.getElementById("Lingo" + weghalen).getElementsByClassName(weghalen);
					div[i].removeAttribute("readonly");
				}

			var stats =  geheime_letters.indexOf(geraden_letter);

				if (stats === -1) {
					document.getElementsByClassName(numberOfSubmits)[i].style.backgroundColor = '#c2f2f2';
				} else {
					document.getElementsByClassName(numberOfSubmits)[i].style.backgroundColor = '#f9a11c';
				}
				if (geraden_letter == '' || geraden_letter === '') {
					document.getElementsByClassName(numberOfSubmits)[i].style.backgroundColor = '#c2f2f2';
				}
				if (geraden_letter === geheime_letter) {
				  var nextRow = document.getElementsByClassName(numberOfSubmits + 1);
				  if (numberOfSubmits === 5) {
				  		document.getElementsByClassName(numberOfSubmits)[i].style.backgroundColor = '#f24c27';
				        var splitLetters = geheime_letters.splice(i, 1, "!");
				  } else {
				  		nextRow[i].value = rand[i];
				  		document.getElementsByClassName(numberOfSubmits)[i].style.backgroundColor = '#f24c27';
				        var splitLetters = geheime_letters.splice(i, 1, "!");
					}
				}
			}

		if (geheime_letters.allValuesSame()) {
			wonGame();
		}
		else if (numberOfSubmits === 5) { 
			var audioDead = new Audio('sound/lingo_dead.mp3')
			audioDead.play();
			alert("Game Over the word was " + rand);
		} else {
			var audioLetter = new Audio('sound/lingo_letter.mp3')
			audioLetter.play();
			numberOfSubmits++;
		}
	}

	function resetGame() {
		location.reload();
	}

	function wonGame() {
		var audioGoed = new Audio("sound/Lingo_Goed.mp3");
		audioGoed.play();
		alert("You have won and the word is " + rand)
		var won = document.getElementsByTagName('input');
		for (var whole = 0, len = won.length; whole < len; whole++) {
			won[whole].setAttribute("readonly", "true");
		}
	}