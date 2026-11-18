console.log(" ---- Rock Papper Scissors Game Designed By Gideon -----\n\n");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNum = Math.random();

  if (randomNum < 1 / 3) {
    return "rock";
  } else if (randomNum < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const userChoice = prompt("Enter your choice(rock,papper or scissors):");

  return userChoice;
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    const lowerHumanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${lowerHumanChoice}`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${lowerHumanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${lowerHumanChoice}`);
      computerScore++;
    }
  }
  for (let i = 0; i <= 4; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    console.log(`
    Human Score: ${humanScore}\n
    Computer Score: ${computerScore}`);
  }
}

playGame();