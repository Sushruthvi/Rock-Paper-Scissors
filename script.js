function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
  let computerPoints = 0;
  let humanPoints = 0;
//TO GET COMPUTER CHOICE
function getComputerChoice() {
  let choice = getRandomInt(3);
  let computerChoice;

  if (choice == 0) {
    computerChoice = "Rock";
  } else if (choice == 1) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Rock,Paper OR Scissor?");
  return humanChoice;
}

function playRound(computerChoice, humanChoice) {
  if (computerChoice == "Rock" && humanChoice == "Paper") {
    humanPoints++;
    return;
  }
  if (computerChoice == "Paper" && humanChoice == "Rock") {
    computerPoints++;
    return;
  }
  if (computerChoice == "Scissors" && humanChoice == "Rock") {
    humanPoints++;
    return;
  }
  if (computerChoice == "Rock" && humanChoice == "Scissors") {
    computerPoints++;
    return;
  }
  if (computerChoice == "Scissors" && humanChoice == "Paper") {
    computerPoints++;
    return;
  }
  if (computerChoice == "Paper" && humanChoice == "Scissors") {
    humanPoints++;
    return;
  }
  if (computerChoice === humanChoice) {
  console.log("It's a tie!");
  return;
  }
}

function playGame() {
   computerPoints = 0;
   humanPoints = 0;
  for (let i = 0; i < 5; i++) {
    computerChoice=getComputerChoice();
    humanChoice=getHumanChoice();
    playRound(computerChoice,humanChoice);
  }
  if(computerPoints>humanPoints){
    alert("Computer Wins");
  }
  else if(computerPoints<humanPoints){
    alert("Human Wins");
  }
  else{
    alert("Its a tie");
  }
}
