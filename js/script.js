var animate;
var animated = false;
var dreamValue = 0;

function animateCover() {
	if (animated == false) {
		animated = true;
		var round = 22;
		var total = round;
		var speed = 10;
		var time = 50;
		animate = setInterval(function(){
			moveAlice(speed, total, round--);
		}, time);
	}
}
	

function moveAlice(speed, total, round) {
	var top = parseInt($("#alice").css("top"));
	$("#alice").css("top", top + speed + (total - round) / 3);
	console.log(speed + total - round);
	if (round < 0) {
		clearInterval(animate);
		window.location.href = "alice_2.html";
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
		$("#cat-image").attr("src", "images/doorEmpty.png");
	} else {
		$("#cat-image").attr("src", "images/doorCat.png");
	}
	if (localStorage.getItem("hatterVisited") != "true") {
		$("#hatter-image").attr("src", "images/doorEmpty.png");
	} else {
		$("#hatter-image").attr("src", "images/doorMadHatter.png");
	}
	if (localStorage.getItem("rabbitVisited") != "true") {
		$("#rabbit-image").attr("src", "images/doorEmpty.png");
	} else {
		$("#rabbit-image").attr("src", "images/doorRabbit.png");
	}
}

function visitCat() {
	localStorage.setItem('catVisited', true);
	window.location.href = "alice_c1.html";
}

function visitLeft() {
	if (localStorage.getItem('rightVisited') == 'true') {
		window.location.href = "alice_4_true.html";
	} else {
		window.location.href = "alice_4.html";
	}
}

function resetGame() {
	localStorage.setItem('rightVisited', false);
}

function leftdoor_lightup() {
	var src = "_images/Alice_left_door.jpg";
	$(".left").attr("src",src);
}

function rightdoor_lightup() {
	var src = "_images/Alice_right_door.jpg";
	$(".right").attr("src",src);
}

function leftdoor_lightoff() {
	var src = "_images/Alice_left_door_dark.jpg";
	$(".left").attr("src",src);
}

function rightdoor_lightoff() {
	var src = "_images/Alice_right_door_dark.jpg";
	$(".right").attr("src",src);
}