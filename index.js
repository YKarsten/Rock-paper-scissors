/* To start the game type game() in the console.*/

// create blank variables to store inputs 
let computerSelection;
let playerSelection;
// create blank variables to store outputs
let computerScore=0;
let playerScore=0;


// Write a function getComputerChoice
// Choose randomly between rock, paper or scissors
// Create a random integer between 0 and 2
// Assign each integer either rock paper or scissor
// Store the value in computerSelection
function getComputerChoice(){
    let randInt = Math.floor(Math.random()*3)
    switch(randInt){
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        case 2:
            computerSelection = "scissors";
            break;
    }
}



// Write a function playRound
//  Compare Computer and Player choice 
function playRound() {
    getComputerChoice()
    switch(playerSelection){
        case "rock":
            if(computerSelection==="paper"){
                playerLost();
            }else if(computerSelection==="scissors"){
                playerWon();
            }else{
                playerTie();
            }
            break;

        case "paper":
            if(computerSelection==="scissors"){
                playerLost();
            }else if(computerSelection==="rock"){
                playerWon();
            }else{
                playerTie();
            }
            break;

        case "scissors":
            if(computerSelection==="rock"){
                playerLost();
            }else if(computerSelection==="paper"){
                playerWon();
            }else{
                playerTie();
            }
            break;
    }
    if (playerScore===5 || computerScore===5){
        let finalScore =document.createElement("div")
        finalScore.textContent=`The game is over with a final score of\n Player: ${playerScore} vs Computer: ${computerScore}`
        document.body.appendChild(finalScore)
    }
    }


//
// Build a simple GUI to play the game
//

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () =>{
    playerSelection="rock";
    playRound();
});

paperBtn.addEventListener("click", () =>{
    playerSelection="paper";
    playRound();
});

scissorsBtn.addEventListener("click", () =>{
    playerSelection="scissors";
    playRound();
});

 
function playerLost(){
    let resultDisplay = document.createElement("div")
    computerScore ++
    resultDisplay.textContent= `The player lost! ${computerSelection} beats ${playerSelection} ||| 
    Player: ${playerScore} vs Computer: ${computerScore}`;
    document.body.appendChild(resultDisplay)
}

function playerWon(){
    let resultDisplay = document.createElement("div")
    playerScore ++
    resultDisplay.textContent= `The player won! ${playerSelection} beats ${computerSelection} |||  
    Player: ${playerScore} vs Computer: ${computerScore}`;
    document.body.appendChild(resultDisplay)
}

function playerTie(){
    let resultDisplay = document.createElement("div")
    resultDisplay.textContent= `It's a tie. ||| 
    Player: ${playerScore} vs Computer: ${computerScore}`;
    document.body.appendChild(resultDisplay)
}