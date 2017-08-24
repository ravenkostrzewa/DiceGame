
function rollFourSidedDie(){
	var determineDie = Math.floor((Math.random() * 4) + 1);
	return determineDie;
}	

function pickNextDieToRoll(fourSidedResult) {
    var offensiveStrategy = prompt("Attacker, how would you like to combat your opponent? Enter the corresponding number to choose your strategy: 1) trick, 2) trap, or 3) sword fight.");
	var potentialPoints;
	
	if (fourSidedResult === 1) {
		console.log("Roll the Eight-Sided Die.");
		potentialPoints = rollEightSidedDie();
	}
	else if (fourSidedResult === 2) {
		console.log("Roll the Ten-Sided Die.");
		rollTenSidedDie();	
		}
	else if (fourSidedResult === 3) {
		console.log("Roll the Twelve-Sided Die.");
		rollTwelveSidedDie();
	}
	else if (fourSidedResult === 4) {
		console.log("Roll the Twenty-Sided Die.");
		rollTwentySidedDie();
	}	
	
	return potentialPoints;
}	
	
function rollEightSidedDie() {	
	var spacesMoved = Math.floor((Math.random() * 8) + 1);
	console.log("You advanced " + spacesMoved + " spaces.");
	return spacesMoved;
}

		
function rollTenSidedDie(playerLocation) {
	var offensiveStrategy = prompt("Attacker, how would you like to combat your opponent? Enter the corresponding number to choose your strategy: 1) trick, 2) trap, or 3) sword fight.");
	var spacesMoved = Math.floor((Math.random() * 10) + 1);
	playerLocation += spacesMoved;
	console.log("You advanced " + spacesMoved + " spaces.");
}

function rollTwelveSidedDie() {
	var offensiveStrategy = prompt("Attacker, how would you like to combat your opponent? Enter the corresponding number to choose your strategy: 1) trick, 2) trap, or 3) sword fight.");
	var spacesMoved = Math.floor((Math.random() * 12) + 1);		
	playerLocation += spacesMoved;
	console.log("You advanced " + spacesMoved + " spaces.");
}

function rollTwentySidedDie() {
	var offensiveStrategy = prompt("Attacker, how would you like to combat your opponent? Enter the corresponding number to choose your strategy: 1) trick, 2) trap, or 3) sword fight.");
	var spacesMoved = Math.floor((Math.random() * 20) + 1);		
	playerLocation += spacesMoved;
	console.log("You advanced " + spacesMoved + " spaces.");
}		
		
function rollSixSidedDie() {
	var defensiveStrategy = Math.floor((Math.random() * 6) + 1);
	
	if (defensiveStrategy === 1 || defensiveStrategy === 2) {
		console.log("Be clever!");
		battles();
	}
	else if (defensiveStrategy === 3 || defensiveStrategy === 4) {
		console.log("Be illusive!");
		battles();
	}
	else if (defensiveStrategy === 5 || defensiveStrategy === 6) {
		console.log("Defend Yourself!");
		battles();
	}
}

function battles() {
	
	if (offensiveStrategy === 1 && (defensiveStrategy === 1 || defensiveStrategy === 2)) {
		console.log("The trick failed! Great defense! Advance " + spacesMoved + " paces.");	//Defense advances
	}
	else if (offensiveStrategy === 1 && (defensiveStrategy === 3 || defensiveStrategy === 4)) {
		console.log("Gotcha! Nice trick attacker! Advance " + spacesMoved + " paces.");
		//attacker (x) {
	}
	else if (offensiveStrategy === 1 && (defensiveStrategy === 5 || defensiveStrategy === 6)) {
		console.log("Gotcha! Nice trick attacker! Advance " + spacesMoved + " paces.");
		//attacker (x) {
	}
	else if (offensiveStrategy === 2 && (defensiveStrategy === 3 || defensiveStrategy === 4)) {
		console.log("Nice hiding spot! Great defense! Advance " + spacesMoved + " paces.");	//Defense advances
	}
	else if (offensiveStrategy === 2 &&(defensiveStrategy === 1 || defensiveStrategy === 2)) {
		console.log("Wow! They fell for that?! Nice trap attacker! Advance " + spacesMoved + " paces.");
		//attacker (x) {
	}
	else if (offensiveStrategy === 2 && (defensiveStrategy === 5 || defensiveStrategy === 6)) {
		console.log("Wow! They fell for that?! Nice trap attacker! Advance " + spacesMoved + " paces.");
		//attacker (x) {
	}
	else if (offensiveStrategy === 3 &&(defensiveStrategy === 5 || defensiveStrategy === 6)) {
		console.log("Relentless resilience! Great defense! Advance " + spacesMoved + " paces.");	 //Defense advances
	}
	else if (offensiveStrategy === 3 && (defensiveStrategy === 1 || defensiveStrategy === 2)) {
		console.log("On guard! Smooth sword skills attacker! Advance " + spacesMoved + " paces.");
		//attacker (x) {
	}
	else if (offensiveStrategy === 3 && (defensiveStrategy === 3 || defensiveStrategy === 4)) {
		console.log("On guard! Smooth sword skills attacker! Advance " + spacesMoved + " paces.");
		//attacker (x) {
	}
}
	
function playGame(){
	var scoreP1 = 0;
	var scoreP2 = 0;
	
	var offensiveStrategy = prompt("Attacker, how would you like to combat your opponent? Enter the corresponding number to choose your strategy: 1) trick, 2) trap, or 3) sword fight.");
	var roll4Result = rollFourSidedDie();
	var potentialPoints = pickNextDieToRoll(roll4Result);
	
	
	// score += potentialPoints;
	rollSixSidedDie();
}

playGame();
	//finish game
	//while loop
	//create variable for taking turns via counter for even and odd
	
	
	
	
