function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
  let computerPoints = 0;
  let humanPoints = 0;
  let humanChoice;
  let roundCounter=0;
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
  const rockbutton=document.getElementById("rockbutton")
  const paperbutton=document.getElementById("paperbutton")
  const scissorsbutton=document.getElementById("scissorsbutton")
  const humansscore=document.getElementById("humanScore")
  const computerscore=document.getElementById("computerScore")
 
  rockbutton.addEventListener("click",()=>{
    humanChoice ="Rock";
    computerChoice=getComputerChoice();
    playRound(computerChoice,humanChoice);
    humansscore.textContent=humanPoints;
    computerscore.textContent=computerPoints;
    
  })

    paperbutton.addEventListener("click",()=>{
    humanChoice ="Paper";
    computerChoice=getComputerChoice();
    playRound(computerChoice,humanChoice);
    humansscore.textContent=humanPoints;
    computerscore.textContent=computerPoints;
      
  })

    scissorsbutton.addEventListener("click",()=>{
    humanChoice="Scissors";
    computerChoice=getComputerChoice();
    playRound(computerChoice,humanChoice); 
    humansscore.textContent=humanPoints;
    computerscore.textContent=computerPoints;
  })

}

function playRound(computerChoice, humanChoice) {

  roundCounter++;
  
  if (computerChoice == "Rock" && humanChoice == "Paper") {
    humanPoints++;
  }
  if (computerChoice == "Paper" && humanChoice == "Rock") {
    computerPoints++;
  }
  if (computerChoice == "Scissors" && humanChoice == "Rock") {
    humanPoints++;
  }
  if (computerChoice == "Rock" && humanChoice == "Scissors") {
    computerPoints++;
  }
  if (computerChoice == "Scissors" && humanChoice == "Paper") {
    computerPoints++;
  }
  if (computerChoice == "Paper" && humanChoice == "Scissors") {
    humanPoints++;
  }
  if (computerChoice === humanChoice) {
  console.log("It's a tie!");
  }
  console.log("Human Point:"+humanPoints);
  console.log("Computer Point:"+computerPoints);
  const finalresult=document.getElementById("finalResult")
 
  if(roundCounter==5){
    finalresult.textContent=humanPoints>computerPoints?"Human Wins":"Computer Wins"
    roundCounter=0;
    humanPoints=0;
    computerPoints=0;
  }
  setTimeout(()=>{
    finalresult.textContent="";
  },2000)
}
getHumanChoice();

