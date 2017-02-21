var turns = 0;
var score = document.getElementById('score');
var balImg = document.getElementById("image");
var balName = document.getElementById("ball");
var imgCard = document.getElementById('card');

if (localStorage.score) {
	score.innerHTML =  localStorage.score;
}
	else {
	localStorage.score = 0;
	score.innerHTML =  localStorage.score;
}

function grabBal() {
	if (turns === 3) {
		alert("Out of turns");
		return false;
	} else {
		turns++;
		var balChane = Math.floor(Math.random() * 100) + 1
		if (balChane <= 5 && balChane >= 0 ) {
			balImg.innerHTML="<img src='img/Green.png' />";
			balName.innerHTML = "groen";
			localStorage.score = Number(localStorage.score) + 1000;
		} else if (balChane <= 80 && balChane >= 6) {
			balImg.innerHTML="<img src='img/Blue.png' />";
			balName.innerHTML = "blauw";
			maingen();
			localStorage.score = Number(localStorage.score) + 150;
		} 	else {
			balImg.innerHTML="<img src='img/Rood.png' />";
			balName.innerHTML = "rood";
			localStorage.score = Number(localStorage.score) - localStorage.score
			turns = 3;
		}
	}
	score.innerHTML =  localStorage.score;
}

function getRandomImage(imgAr, path) {
    path = path || 'img/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    imgCard.innerHTML = imgStr;
}

function balCard() {
	var random_images_array = ["LingoCard1_balOut.png", "LingoCard1.png",
	 "LingoCard2_balOut.png", "LingoCard2.png"];
	 getRandomImage(random_images_array);
}

function generate_rand() {
    return Math.floor((Math.random() * 75));
}

function maingen() {
    var balNumber = generate_rand() + 1;
    balGone(balNumber);
}

function balGone(balNumber) {
	document.getElementById('tesst').innerHTML = "Bal number is " + balNumber;
	var gifChoose = document.getElementById('gifie');
}
