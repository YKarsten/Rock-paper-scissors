function getComputerChoice() {
  const randInt = Math.ceil(Math.random() * 3);
  switch (randInt) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function getPlayerChoice() {
  let playerSelection = prompt("Select your weapon!").toLowerCase();
  console.log(playerSelection);
  if (!["rock", "paper", "scissors"].includes(playerSelection)) {
    alert("You need to select either rock, paper or scissors!");
    rpsPlay();
  }
  return playerSelection;
}

function playRound() {
  const playerWin = [
    ["rock", "scissors"],
    ["paper", "rock"],
    ["scissors", "paper"],
  ];

  let playerChoice = getPlayerChoice();
  let computerChoice = getComputerChoice();
  let matchup = [playerChoice, computerChoice];
  console.log(matchup);

  if (playerChoice == computerChoice) {
    console.log("It's a Tie. Lets go again!");
    playRound();
  } else if (
    playerWin.some(
      (subarray) =>
        subarray.length === matchup.length &&
        subarray.every((value, index) => value === matchup[index])
    )
  ) {
    console.log(`Player wins! ${playerChoice} beats ${computerChoice}`);
    return "player win";
  } else {
    console.log(`Computer Wins! ${computerChoice} beats ${playerChoice}`);
    return "computer win";
  }
}

function game() {
  let roundNumber = 0;
  let playerWins = 0;
  let computerWins = 0;

  while (roundNumber < 5) {
    let result = playRound();
    if (result == "player win") {
      playerWins += 1;
    } else {
      computerWins += 1;
    }
    roundNumber += 1;
  }
  
  console.log(
    `The final score is\nPlayer: ${playerWins} \nComputer: ${computerWins}`
  );
}
