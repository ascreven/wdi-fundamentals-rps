////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move==null) {
      return getInput();
    }
    console.log(move);
    return getWinner();
}


function getComputerMove(move) {
  if (move==null) {
    return randomPlay();
  }
    console.log(move);
    return getWinner();
}

function getWinner(playerMove,computerMove) {
    var winner;
    playerMove=getPlayerMove(playerMove);
    computerMove=getComputerMove(computerMove);
    if (playerMove==computerMove) {
      winner='tie';
    } else if ((playerMove=='rock' && computerMove=='scissors')|| (playerMove=='scissors' && computerMove=='paper') || (playerMove=='paper' && computerMove=='rock')) {
      winner='player';
    } else {
      winner='computer';
    }
    return winner;
}
getWinner();
