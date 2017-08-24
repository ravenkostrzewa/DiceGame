

function rollFourSidedDie(){
	var determineDie = Math.floor((Math.random() * 4) + 1);
	return determineDie;
}	

function pickNextDieToRoll(fourSidedResult, player2Name) {
	var potentialPoints;
	
	if (fourSidedResult === 1) {
		console.log(player2Name+ ", roll the eight-sided die.");
		potentialPoints = rollEightSidedDie(player2Name);
	}
	else if (fourSidedResult === 2) {
		console.log(player2Name+ ", roll the ten-sided die.");
		potentialPoints = rollTenSidedDie(player2Name);	
		}
	else if (fourSidedResult === 3) {
		console.log(player2Name+ ", roll the twelve-sided die.");
		potentialPoints = rollTwelveSidedDie(player2Name);
	}
	else if (fourSidedResult === 4) {
		console.log(player2Name+ ", roll the twenty-sided die.");
		potentialPoints = rollTwentySidedDie(player2Name);
	}	
	console.log("You rolled a "+ potentialPoints + ".");
	return potentialPoints;
}	
	
function rollEightSidedDie(player2Name) {	
	var spacesMoved = Math.floor((Math.random() * 8) + 1);
	console.log(player2Name+ ", you will advance " + spacesMoved + " spaces if you can conquer your opponent.");
	return spacesMoved;
}
	
function rollTenSidedDie(player2Name) {

	var spacesMoved = Math.floor((Math.random() * 10) + 1);
	console.log(player2Name+ ", you will advance " + spacesMoved + " spaces if you can conquer your opponent.");
	return spacesMoved;
}

function rollTwelveSidedDie(player2Name) {
	var spacesMoved = Math.floor((Math.random() * 12) + 1);		
	console.log(player2Name+ ", you will advance " + spacesMoved + " spaces if you can conquer your opponent.");
	return spacesMoved;
}

function rollTwentySidedDie(player2Name) {
	var spacesMoved = Math.floor((Math.random() * 20) + 1);		
	console.log(player2Name+ ", you will advance " + spacesMoved + " spaces if you can conquer your opponent.");
	return spacesMoved;
}		
		
function rollSixSidedDie(player1Name) {
	var defensiveStrategy = Math.floor((Math.random() * 6) + 1);
	
	if (defensiveStrategy === 1 || defensiveStrategy === 2) {
		console.log(player1Name+ ", be clever!");
	}
	else if (defensiveStrategy === 3 || defensiveStrategy === 4) {
		console.log(player1Name+ ", be illusive!");
	}
	else if (defensiveStrategy === 5 || defensiveStrategy === 6) {
		console.log(player1Name+ ", defend Yourself!");
	}
	return defensiveStrategy;
}

function battles(offensiveStrategy, defensiveStrategy, player1Name, player2Name, spacesMoved) {
	var player2WinsRound;
		
	if (offensiveStrategy === 1 && (defensiveStrategy === 1 || defensiveStrategy === 2)) {
		console.log(player1Name+ ", the trick failed! Great defense! Advance " + spacesMoved + " spaces.");	
		player2WinsRound = false;
	}
	else if (offensiveStrategy === 1 && (defensiveStrategy === 3 || defensiveStrategy === 4)) {
		console.log(player2Name+ ", Nice trick attacker! Advance " + spacesMoved + " spaces.");
		player2WinsRound = true;
	}
	else if (offensiveStrategy === 1 && (defensiveStrategy === 5 || defensiveStrategy === 6)) {
		console.log(player2Name+ ", Nice trick attacker! Advance " + spacesMoved + " spaces.");
		player2WinsRound = true;
	}
	else if (offensiveStrategy === 2 && (defensiveStrategy === 3 || defensiveStrategy === 4)) {
		console.log(player1Name+ ", nice hiding spot! Great defense! Advance " + spacesMoved + " spaces.");
		player2WinsRound = false;
	}
	else if (offensiveStrategy === 2 &&(defensiveStrategy === 1 || defensiveStrategy === 2)) {
		console.log(player2Name+ ", wow! They fell for that?! Nice trap attacker! Advance " + spacesMoved + " spaces.");
		player2WinsRound = true;
	}
	else if (offensiveStrategy === 2 && (defensiveStrategy === 5 || defensiveStrategy === 6)) {
		console.log(player2Name+ ", wow! They fell for that?! Nice trap attacker! Advance " + spacesMoved + " spaces.");
		player2WinsRound = true;
	}
	else if (offensiveStrategy === 3 && (defensiveStrategy === 5 || defensiveStrategy === 6)) {
		console.log(player1Name+ ", relentless resilience! Great defense! Advance " + spacesMoved + " spaces.");
		player2WinsRound = false;
	}
	else if (offensiveStrategy === 3 && (defensiveStrategy === 1 || defensiveStrategy === 2)) {
		console.log(player2Name+ ", on guard! Smooth sword skills attacker! Advance " + spacesMoved + " spaces.");
		player2WinsRound = true;
	}
	else if (offensiveStrategy === 3 && (defensiveStrategy === 3 || defensiveStrategy === 4)) {
		console.log(player2Name+ ", on guard! Smooth sword skills attacker! Advance " + spacesMoved + " spaces.");
		player2WinsRound = true;
	}
	return player2WinsRound;
}
	
function playGame(){
	var player1Name = prompt ("What is your name?");
	var player2Name = prompt ("What is your name?");
	var player1Score = 0;
	var player2Score = 0;
	var isPlayer1Turn = true;
	var offensiveStrategy;

	
	while (player1Score < 50 && player2Score < 50) {
		if (isPlayer1Turn) {
			offensiveStrategy = prompt(player1Name + ", how would you like to combat your opponent? Enter the corresponding number to choose your strategy: 1) trick, 2) trap, or 3) sword fight.");
			while(offensiveStrategy !== "1" && offensiveStrategy !== "2" && offensiveStrategy !== "3") {
				offensiveStrategy = prompt(player1Name + ", ummm... no. Enter 1, 2, or 3.");
			}
			offensiveStrategy = parseInt(offensiveStrategy);
			var rollForResult = rollFourSidedDie();
			var potentialPoints = pickNextDieToRoll(rollForResult, player1Name);
			var defensiveStrategy = rollSixSidedDie(player2Name);
			var defensiveStrategy = parseInt(defensiveStrategy);
			var player2Won = battles(offensiveStrategy, defensiveStrategy, player1Name, player2Name, potentialPoints);
			isPlayer1Turn = false;
		}
		else {
			offensiveStrategy = prompt(player2Name + ", how would you like to combat your opponent? Enter the corresponding number to choose your strategy: 1) trick, 2) trap, or 3) sword fight.");
			while(offensiveStrategy !== "1" && offensiveStrategy !== "2" && offensiveStrategy !== "3") {
				offensiveStrategy = prompt(player2Name + ", ummm... no. Enter 1, 2, or 3.");
			}
			offensiveStrategy = parseInt(offensiveStrategy);
			var rollForResult = rollFourSidedDie();
			var potentialPoints = pickNextDieToRoll(rollForResult, player2Name);
			var defensiveStrategy = rollSixSidedDie(player1Name);
			var defensiveStrategy = parseInt(defensiveStrategy);
			var player2Won = battles(offensiveStrategy, defensiveStrategy, player1Name, player2Name, potentialPoints);
			isPlayer1Turn = true;
		}
		
		if (player2Won === true) {
		console.log(player2Score += potentialPoints);
		}
		else {
		console.log(player1Score += potentialPoints);
		} 
		
		console.log("Scoreboard:" + player1Name + player1Score + "vs." + player2Name + player2Score);
		
		if (player1Score >= 50) {
		console.log(" " + player1Name + " Wins!");
		}
		else if (player2Score >= 50) {
		console.log(" " + player2Name + " Wins! ");
		}
		
	}
	console.log("Game Over");
}

playGame();
	
	
	
	
