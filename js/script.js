var animate;
var animated = false;

function animateCover() {
	if (animated == false) {
		animated = true;
		var round = 20;
		var total = round;
		var speed = 20;
		var time = 40;
		animate = setInterval(function(){
			moveAlice(speed, total, round--);
		}, time);
	}
	initDreamValue();
	resetGame();
}

function initDreamValue() {
	localStorage.setItem("dreamValue", 0);
}
	

function moveAlice(speed, total, round) {
	var top = parseInt($("#alice").css("top"));
	$("#alice").css("top", top + speed + total - round);
	if (round < 0) {
		clearInterval(animate);
		window.location.href = "alice_2.html";
	}
}

function animateBackground() {
	var round = 100;
	var time = 80;
	animate = setInterval(function(){
		moveBackground(round--);
	}, time);
}

function moveBackground(round) {
	$("#long-container").css("background-position", round + "% 0%");
	if (round <= 0) {
		clearInterval(animate);
	}
}

function chooseOption(value, panel) {
	changeDreamValue(value);
	goToNextPanel(panel);
}

function changeDreamValue(value) {
	var dreamValue = parseInt(localStorage.getItem("dreamValue"));
	dreamValue +=value;
	localStorage.setItem("dreamValue", dreamValue);
}

function goToNextPanel(panel) {
	window.location.href = "alice_" + panel + ".html";
}

function showDoors() {
	if (localStorage.getItem("catVisited") != "true") {
		hideCatDoor();
	} else {
		showCatDoor();
	}
	if (localStorage.getItem("hatterVisited") != "true") {
		hideHatterDoor();
	} else {
		showHatterDoor();
	}
	if (localStorage.getItem("rabbitVisited") != "true") {
		hideRabbitDoor();
	} else {
		showRabbitDoor();
	}
	if (localStorage.getItem("catVisited") == "true" && localStorage.getItem("hatterVisited") == "true" && localStorage.getItem("rabbitVisited") == "true") {
		showQueenDoor();
	} else {
		hideQueenDoor();
	}
}

function showQueenDoor() {
	var src = "images/doorQueen.png";
	$("#queen-image").attr("src",src);
}

function hideQueenDoor() {
	var src = "images/doorEmpty.png";
	$("#queen-image").attr("src",src);
}

function showCatDoor() {
	var src = "images/doorCat.png";
	$("#cat-image").attr("src",src);
}

function hideCatDoor() {
	var src = "images/doorEmpty.png";
	$("#cat-image").attr("src",src);
}

function showHatterDoor() {
	var src = "images/doorMadHatter.png";
	$("#hatter-image").attr("src",src);
}

function hideHatterDoor() {
	var src = "images/doorEmpty.png";
	$("#hatter-image").attr("src",src);
}

function showRabbitDoor() {
	var src = "images/doorRabbit.png";
	$("#rabbit-image").attr("src",src);
}

function hideRabbitDoor() {
	var src = "images/doorEmpty.png";
	$("#rabbit-image").attr("src",src);
}

function visitQueen() {
	if (localStorage.getItem("catVisited") == "true" && localStorage.getItem("hatterVisited") == "true" && localStorage.getItem("rabbitVisited") == "true") {
		localStorage.setItem('newPlace', true);
		localStorage.setItem('currPlace', "Queen");
		window.location.href = "alice_q1.html";
	}
}

function visitCat() {
	localStorage.setItem('catVisited', true);
	localStorage.setItem('newPlace', true);
	localStorage.setItem('currPlace', "Cat");
	window.location.href = "alice_c1.html";
}

function visitHatter() {
	localStorage.setItem('hatterVisited', true);
	localStorage.setItem('newPlace', true);
	localStorage.setItem('currPlace', "Hatter");
	window.location.href = "alice_m1.html";
}

function visitRabbit() {
	localStorage.setItem('rabbitVisited', true);
	localStorage.setItem('newPlace', true);
	localStorage.setItem('currPlace', "Rabbit");
	window.location.href = "alice_r1.html";
}

function leave() {
	var dreamValue = parseInt(localStorage.getItem("dreamValue"));
	if (dreamValue <= 0) {
		window.location.href = "alice_outgood1.html";
	} else {
		window.location.href = "alice_outbad1.html";
	}
}

function stay() {
	var dreamValue = parseInt(localStorage.getItem("dreamValue"));
	if (dreamValue >= 0) {
		window.location.href = "alice_ingood.html";
	} else {
		window.location.href = "alice_inbad.html";
	}
}

function resetGame() {
	localStorage.setItem('catVisited', false);
	localStorage.setItem('hatterVisited', false);
	localStorage.setItem('rabbitVisited', false);
	localStorage.setItem('newPlace', false);
	localStorage.setItem('currPlace', "pre-hub");
}