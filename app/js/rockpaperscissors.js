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
      move=getInput();
    }
    console.log("Player chose "+move);
    return move;
}

function getComputerMove(move) {
  if (move==null) {
    move=randomPlay();
  }
    console.log("Computer chose "+move);
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    playerMove=getPlayerMove();
    computerMove=getComputerMove();
    if (playerMove==computerMove) {
      winner='tie';
      console.log('It is a tie');
    } else if ((playerMove=='rock' && computerMove=='scissors')|| (playerMove=='scissors' && computerMove=='paper') || (playerMove=='paper' && computerMove=='rock')) {
      winner='player';
      console.log('Player won!');
    } else {
      winner='computer';
      console.log('Computer won!');
    }
    return winner;
}
getWinner();
