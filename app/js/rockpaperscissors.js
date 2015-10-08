////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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
    if (playerMove===computerMove) {
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

function playToFive() {
    console.log('Let\'s play Rock Paper Scissors');
    var playerWins = 0;
    var computerWins = 0;
    var a = getWinner();
    while(playerWins<5 && computerWins<5) {
        if (a==='computer') {
            computerWins+=1;
            console.log('Player: '+playerWins+'; Computer: '+computerWins);
            a=getWinner();
        } else if (a==='player') {
            playerWins+=1;
            console.log('Player: '+playerWins+'; Computer: '+computerWins);
            a=getWinner();
        } else if (a==='tie') {
            console.log('Player: '+playerWins+'; Computer: '+computerWins);
            a=getWinner();
      }
  } return console.log('Player: '+playerWins+'; Computer: '+computerWins);
}
playToFive();
