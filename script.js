let valuesArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  let value = Math.floor(Math.random() * 3);
  return valuesArray[value];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
