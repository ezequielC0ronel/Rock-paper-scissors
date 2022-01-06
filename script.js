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
  let finalResult;

  if (playerSelection === computerSelection) {
    finalResult = `Tie round!`;
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    finalResult = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  } else {
    finalResult = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  }
  return finalResult;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => btn.addEventListener("click", game));

function game(e) {
  let playerPick = e.target.textContent;
  let computerPick = computerPlay();
  console.log(`Cpu pick: ${computerPick}; User pick: ${playerPick};`);
  console.log(playRound(playerPick, computerPick));
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
