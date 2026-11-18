console.log(" ---- Rock Paper Scissors Game Designed By Gideon -----\n\n");

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
  const userChoice = prompt("Enter your choice(rock,paper or scissors):");

  return userChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const lowerHumanChoice = humanChoice.toLowerCase();

    if (lowerHumanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${lowerHumanChoice}`);
    } else if (
      (lowerHumanChoice === "rock" && computerChoice === "scissors") ||
      (lowerHumanChoice === "paper" && computerChoice === "rock") ||
      (lowerHumanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${lowerHumanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${lowerHumanChoice}`);
      computerScore++;
    }
  }
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    console.log(`
    Human Score: ${humanScore}\n
    Computer Score: ${computerScore}`);
  }
}

playGame();
