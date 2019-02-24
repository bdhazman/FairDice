var diceRolls = [];
var oddRoll = false;

function populateDiceRolls(){
  for(i = 1; i <= 6; i++){
    for(j = 1; j<= 6; j++){
      diceRolls.push(i+j);
    }
  }
}

function shuffleDiceRolls(){
  for(i = 0; i < 36; i++){
    var k = Math.floor(Math.random() * i+1);
    var temp = diceRolls[k];
    diceRolls[k] = diceRolls[i];
    diceRolls[i] = temp;
  }
}

function rollDice(){
  var number = diceRolls.pop();

  document.getElementById("number").innerHTML = number;
  document.getElementById("number").style.color = oddRoll ? "#000000" : "#888888";
  oddRoll = !oddRoll;
  if(diceRolls.length == 0){
    populateDiceRolls();
    shuffleDiceRolls();
    console.log(diceRolls);
  }
}

populateDiceRolls();
console.log(diceRolls);

shuffleDiceRolls();
console.log(diceRolls);
