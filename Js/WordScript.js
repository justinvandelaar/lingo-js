var rand;
var numberOfSubmits;
if (localStorage.score) {}
	else {
	localStorage.score = 0;
}
document.getElementById('score').innerHTML = localStorage.score;

function allValuesSame(pArray) {
    for(var i = 1; i < pArray.length; i++)
    {
        if(pArray[i] !== pArray[0])
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
		var elemenLingo = document.getElementById("Lingo" + numberOfSubmits);
		var currentLingoDiv = elemenLingo.getElementsByTagName("input");
		var nodeList = document.getElementsByClassName(numberOfSubmits);

		var geheime_letters = rand.split("");

		for (var i = 0, len = currentLingoDiv.length; i < len; i ++) {
			var geraden_letter = currentLingoDiv[i].value
		    var geheime_letter = geheime_letters[i];

			if (numberOfSubmits == 5) {
				var setRead = elemenLingo.getElementsByClassName(numberOfSubmits)[i];
				setRead.setAttribute("readonly", "true");
			}
			else {
				var setRead = elemenLingo.getElementsByClassName(numberOfSubmits)[i];
				setRead.setAttribute("readonly", "true");
				var weghalen = numberOfSubmits + 1;
				var div = document.getElementById("Lingo" + weghalen).getElementsByClassName(weghalen);
				div[i].removeAttribute("readonly");
			}

			var stats =  geheime_letters.indexOf(geraden_letter);

			if (stats === -1) {
				nodeList[i].style.backgroundColor = '#c2f2f2';
			} else {
				nodeList[i].style.backgroundColor = '#f9a11c';
			  	Number(localStorage.score) + 50
			}
			if (geraden_letter == '' || geraden_letter === '') {
				nodeList[i].style.backgroundColor = '#c2f2f2';
			}
			if (geraden_letter === geheime_letter) {
			  var nextRow = document.getElementsByClassName(numberOfSubmits + 1);
			  if (numberOfSubmits === 5) {
			  		nodeList[i].style.backgroundColor = '#f24c27';
			  		Number(localStorage.score) + 150;
			        var splitLetters = geheime_letters.splice(i, 1, "!");
			  } else {
			  		nextRow[i].value = rand[i];
			  		nodeList[i].style.backgroundColor = '#f24c27';
			  		Number(localStorage.score) + 150;
			        var splitLetters = geheime_letters.splice(i, 1, "!");
				}
			}
		}

		if (allValuesSame(geheime_letters)) {
			setTimeout(wonGame(), 5000);
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
		alert("You have won and the word is " + rand)
		var won = document.getElementsByTagName('input');
		for (var whole = 0, len = won.length; whole < len; whole++) {
			won[whole].setAttribute("readonly", "true");
		}
		window.location.href = "ballen.html"
		var audioGoed = new Audio("sound/Lingo_Goed.mp3");
		audioGoed.play();
	}