function rollFourSidedDie(){
	var z = Math.floor((Math.random() * 4) + 1);
   
		if (z === 1) {
			console.log("Roll the Eight-Sided Die.");
			rollEightSidedDie();
		}
		else if (z === 2) {
			console.log("Roll the Ten-Sided Die.");
			rollTenSidedDie();	
			}
		else if (z === 3) {
			console.log("Roll the Twelve-Sided Die.");
			rollTwelveSidedDie();
		}
		else if (z === 4) {
			console.log("Roll the Twenty-Sided Die.");
			rollTwentySidedDie();
		}
	}	
		
	
function rollEightSidedDie(playerLocation) {	
	var userWord = prompt("Attacker, how would you like to combat your opponent? Enter the corresponding number to choose your strategy: 1) trick, 2) trap, or 3) sword fight.");
	var x = Math.floor((Math.random() * 8) + 1);
	playerLocation += y;
	console.log("You advanced " + x + " spaces.";
	rollEightSidedDie(playerLocation)
}

		
function rollTenSidedDie(playerLcation) {
	var userWord = prompt("Attacker, how would you like to combat your opponent? Enter the corresponding number to choose your strategy: 1) trick, 2) trap, or 3) sword fight.");
	var x = Math.floor((Math.random() * 12) + 1);
	playerLocation += x;
	console.log("You advanced " + x + " spaces.";
	rollTwelveSidedDie(playerLocation)
}



function rollTwentySidedDie() {
	var v = prompt("Attacker, how would you like to combat your opponent? Enter the corresponding number to choose your strategy: 1) trick, 2) trap, or 3) sword fight.");
	var x = Math.floor((Math.random() * 20) + 1);		
	playerLocation += x;
	console.log("You advanced " + x + " spaces.";
	rollTwentySidedDie(playerLocation)
}
		
		
		
function rollSix-SidedDie() {
	var w = sixSidedDie
	
for sixSidedDie = 1 + randomsource.nextInt(6);
		if (w === 1 || w === 2) {
			console.log("Be clever!");
			battles();
			}
		else if (w === 3 || w === 4) {
			console.log("Be illusive!")
			battles();
		}
		else if (w === 5 || w === 6) {
			console.log("Defend Yourself!")
			battles();
			}
		}
	}
}		
	
function battles() {
	
	if (v === 1) && (w === 1 || w === 2) {
		console.log("The trick failed! Great defense! Advance " x " paces.");	//Defense advances
		}
	}
	else if (v === 1) && (w === 3 || w === 4) {
		console.log("Gotcha! Nice trick attacker! Advance " x " paces.");
		//attacker (x) {
		}
	}
	else if (v === 1) and (w === 5 || w === 6) {
		console.log("Gotcha! Nice trick attacker! Advance " x " paces.");
		//attacker (x) {
		}
	}
	else if (v === 2) and (w === 3 || w === 4) {
		console.log("Nice hiding spot! Great defense! Advance " x " paces.");	//Defense advances
		}
	}
	else if (v === 2) and (w === 1 || w === 2) {
		console.log("Wow! They fell for that?! Nice trap attacker! Advance " x " paces.");
		//attacker (x) {
		}
	}
	else if (v === 2) and (w === 5 || w === 6) {
		console.log("Wow! They fell for that?! Nice trap attacker! Advance " x " paces.");
		//attacker (x) {
		}
	}
	else if (v === 3) and (w === 5 || w === 6) {
		console.log("Relentless resilience! Great defense! Advance " x " paces.");	 //Defense advances
		}
	}
	else if (v === 3) and (w === 1 || w === 2) {
		console.log("On guard! Smooth sword skills attacker! Advance " x " paces.");
		//attacker (x) {
		}
	}
	else if (v === 3) and (w === 3 || w === 4) {
		console.log("On guard! Smooth sword skills attacker! Advance " x " paces.");
		//attacker (x) {
		}	
	}
	
	
	
