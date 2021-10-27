let valuesArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  let value = Math.floor(Math.random() * 3);
  console.log(valuesArray[value]);
}