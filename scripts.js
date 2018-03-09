//**create global variables
var botWeapon = 0;
var playerWeapon = 0;
var botScore = 0;
var playerScore = 0;
var rock = "rock";
var paper = "paper";
var scissors = "scissors";

//**create game functions
//bot chooses weapon
function botChoice (){
  var random = Math.floor(Math.random()*30);
  if (random < 10 ) {
    botWeapon = rock;
  }
  else if (random < 20) {
    botWeapon = paper;
  }else if (random < 30) {
    botWeapon = scissors;
  }
}
//tell player what bot chooses
function checkWeapon() {
  if (botWeapon == rock) {
    console.log("bot chose rock")
  }
  else if (botWeapon == paper) {
    console.log("bot chose paper")
  }
  else if (botWeapon == scissors) {
    console.log("bot chose scissors")
  }
}
//begin the game
function playGame() {
  //check if bot wins
  if (botWeapon == rock && playerWeapon == scissors || botWeapon == paper && playerWeapon == rock || botWeapon == scissors && playerWeapon == paper){
    console.log("You Lose!")
    botScore ++;
  }
  else if (playerWeapon == rock && botWeapon == scissors || playerWeapon == paper && botWeapon == rock || playerWeapon == scissors && botWeapon == paper) {
    console.log("You Win!")
    playerScore ++;
  }
  else if (playerWeapon == rock && botWeapon == rock || playerWeapon == paper && botWeapon == paper || playerWeapon == scissors && botWeapon == scissors) {
    console.log("There was a tie!")
  }
}

//**What can the player do?//
//**choose weapons
//player chooses rock
document.getElementById('buttonRock').onclick=function (){
  playerWeapon = rock
  botChoice()
  checkWeapon()
  playGame()
}
//player chooses paper
document.getElementById('buttonPaper').onclick=function (){
  playerWeapon = paper
  botChoice()
  checkWeapon()
  playGame()
}
//player chooses scissors
document.getElementById('buttonScissors').onclick=function (){
  playerWeapon = scissors
  botChoice()
  checkWeapon()
  playGame()
}
