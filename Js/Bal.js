var turns = 0;
if (localStorage.score) {
	document.getElementById('score').innerHTML =  localStorage.score;
}
	else {
	localStorage.score = 0;
	document.getElementById('score').innerHTML =  localStorage.score;
}
function grabBal() {

	if (turns === 3) {
		alert("Out of turns");
		return false;
	} else {
		turns++;
		var balChane = Math.floor(Math.random() * 100) + 1
		if (balChane <= 5 && balChane >= 0 ) {
			document.getElementById("image").innerHTML="<img src='img/Green.png' />";
			document.getElementById("ball").innerHTML = "groen";
			localStorage.score = Number(localStorage.score) + 1000;
		} else if (balChane <= 80 && balChane >= 6) {
			document.getElementById("image").innerHTML="<img src='img/Blue.png' />";
			document.getElementById("ball").innerHTML = "blauw";
			localStorage.score = Number(localStorage.score) + 150;
		} 	else {
			document.getElementById("image").innerHTML="<img src='img/Rood.png' />";
			document.getElementById("ball").innerHTML = "rood";
			localStorage.score = Number(localStorage.score) - localStorage.score
			turns = 3;
		}
	}
	document.getElementById('score').innerHTML =  localStorage.score;
}