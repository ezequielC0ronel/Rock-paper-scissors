//Funcionalidad del juego
let valuesArray = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let value = Math.floor(Math.random() * 3);
  return valuesArray[value];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    parraph.textContent = `Tie round! No points`;
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    parraph.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
    computerScoreDiv.textContent = computerScore;
  } else {
    parraph.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
    // finalResult = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    playerScoreDiv.textContent = playerScore;
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => btn.addEventListener("click", game));

function game(e) {
  let playerPick = e.target.textContent;
  let computerPick = computerPlay();
  // console.log(`Cpu pick: ${computerPick}; User pick: ${playerPick};`);
  // console.log(playRound(playerPick, computerPick));
  playRound(playerPick, computerPick);
}

// function game() {
//   let round = 1;
//   while (round <= 5) {
//     console.log(`Round ${round}`);
//     let playerPick = prompt("Make a selection!");
//     let computerPick = computerPlay();
//     console.log(playRound(playerPick, computerPick));
//     console.log(`User:${playerScore}; Cpu:${computerScore};`);
//     round++;
//   }

//   if(playerScore === computerScore){
//     console.log("No Winners! Tie game");
//   }else if (playerScore > computerScore){
//     console.log("User Wins!");
//   }else if (computerScore > playerScore){
//     console.log("CPU Wins!");
//   }
// }

// game();

//DOM Methods
const container = document.querySelector('.container');

//adding resultsDiv
const resultsDiv = document.createElement('div');
resultsDiv.setAttribute('class', 'results');

//adding p to show the results of a game
const parraph = document.createElement('p');
resultsDiv.appendChild(parraph);

//score divs and container
const scoreContainer = document.createElement('div');
scoreContainer.setAttribute('class', 'gameScore');

const playerScoreDiv = document.createElement('div');
playerScoreDiv.textContent = "0";

const computerScoreDiv = document.createElement('div');
computerScoreDiv.textContent = "0";

scoreContainer.append(playerScoreDiv, computerScoreDiv);

resultsDiv.appendChild(scoreContainer);

container.appendChild(resultsDiv);
