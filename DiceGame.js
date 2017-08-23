

function rollFourSidedDie(){
	var x = Math.floor((Math.random() * 4) + 1);
   
		if (x === 1) {
			console.log("Roll the eightSided die.");
			rollEightSidedDie();
		}
		else if (x === 2) {
			console.log("Roll the tenSided die.");
			rollTenSidedDie();	
			}
		else if (x === 3) {
			console.log("Roll the twelveSided die.");
			rollTwelveSidedDie();
		}
		else if (x === 4) {
			console.log("Roll the twentySided die.");
			rollTwentySidedDie();
		}
	}	

function rollEightSidedDie(playerLocation) {
	var x = Math.floor((Math.random() * 8) + 1);
	playerLocation += x;
	console.log("You moved forward " + x + " spaces.";
	rollTenSidedDie(playerLocation)
}

		
function rollTenSidedDie(playerLcation) {
var x = Math.floor((Math.random() * 10) + 1);



function rollTwelveSidedDie() {
var x = Math.floor((Math.random() * 12) + 1);



function rollTwentySidedDie() {
var x = Math.floor((Math.random() * 20) + 1);		
		
		
		
		
		
	
		
		
var userWord = prompt("Attacker, choose an attack: 1) pursue, 2) search out, or 3) shoot.");

// roll die		
 

		//defender:
function rollSix-SidedDie() {
	var y = sixSidedDie
	
for sixSidedDie = 1 + randomsource.nextInt(6);
		if (y === 1 || y === 2) {
			console.log("Run!");	
		else if (y === 3 || y === 4) {
			console.log("Hide!")
		else if (y === 5 || y === 6) {
			console.log("Shield Yourself!")
			}
		}
	}
}		
	
function battles() {
	
	if attacker chose 1 and (y === 1 || y === 2) {
		console.log("What a chase! The defendant prevails!");	

	else if attacker chose 1 and (y === 3 || y === 4) {
		console.log("Gothca! Retreat -- paces.");
		
	else if attacker chose 1 and (y === 5 || y === 6) {
		console.log("A merciless attack! Retreat -- paces.");
	
	else if attacker chose 2 and (y === 3 || y === 4) {
		console.log("Nice hiding spot! The defendant prevails!");	

	else if attacker chose 2 and (y === 1 || y === 2) {
		console.log("A merciless attack! The defendant cannot hold its ground. Retreat -- paces.");
		
	else if attacker chose 2 and (y === 5 || y === 6) {
		console.log("A successful attack! Retreat -- paces.");

	else if attacker chose 3 and (y === 5 || y === 6) {
		console.log("You saw that coming! The defendant prevails!");	

	else if attacker chose 3 and (y !== 1 || y !== 2) {
		console.log("You cannot outrun from that shot! Retreat -- paces.");
		
	else if attacker chose 3 and (y !== 3 || y !== 4) {
		console.log("You cannot hide from that shot! Retreat -- paces.");		
		}	
	}	
}
	
	
	
	
var player1Location = 1;
var player2Location = 1;
rollFourSidedDie(player1Location);	
rollEightSidedDie(player2Location);
		
		
// when one player is forced back 50+ paces, the other player wins