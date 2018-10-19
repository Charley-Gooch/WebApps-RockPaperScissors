/**
 * 
 */

function nameCookie() {
	document.cookie = ("name=" + (document.form.playerName).value + ";path=/");
}

function findCookie() {
	result = document.cookie.split('=')[1];
	document.write(result);
}

function rock() {
	fight("Rock", compMove());
}

function paper() {
	fight("Paper", compMove());
}

function scissors() {
	fight("Scissors", compMove());
}

function fight(playerMove, compMove) {
	if(playerMove == "Rock") {
		if(compMove == "Rock") {
			alert("Computer Player Rock!: It's a draw!");
			window.location.replace("RockPaperScissorsFrontEnd.html");
		}else if(compMove == "Paper") {
			alert("Computer Played Paper!: Computer Wins!");
			window.location.replace("RockPaperScissorsFrontEnd.html");
		}else if(compMove == "Scissors"){
			alert("Computer Played Scissors!: Player Wins!");
			window.location.replace("RockPaperScissorsFrontEnd.html");
		}
	}else if(playerMove == "Paper") {
		if(compMove == "Rock") {
			alert("Computer Player Rock!: Player Wins!");
			window.location.replace("RockPaperScissorsFrontEnd.html");
		}else if(compMove == "Paper") {
			alert("Computer Played Paper!: It's a draw!");
			window.location.replace("RockPaperScissorsFrontEnd.html");
		}else if(compMove == "Scissors"){
			alert("Computer Played Scissors!: Computer Wins!");
			window.location.replace("RockPaperScissorsFrontEnd.html");
		}
	}else if(playerMove == "Scissors") {
		if(compMove == "Rock") {
			alert("Computer Player Rock!: Computer Wins!");
			window.location.replace("RockPaperScissorsFrontEnd.html");
		}else if(compMove == "Paper") {
			alert("Computer Played Paper!: Player Wins!");
			window.location.replace("RockPaperScissorsFrontEnd.html");
		}else if(compMove == "Scissors"){
			alert("Computer Played Scissors!: It's a draw!");
			window.location.replace("RockPaperScissorsFrontEnd.html");
		}
	}
}

function compMove() {
	val = Math.floor(Math.random() * 3) + 1;
	if(val == 1){
		return "Rock";
	}else if(val == 2) {
		return "Paper";
	}else if(val == 3) {
		return "Scissors";
	}else{
		alert("SOMETHING BROKED");
	}
}
