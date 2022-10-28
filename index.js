/* To start the game type game() in the console.*/

// create blank variables to store inputs 
let computerSelection;
let playerSelection;
// create blank variables to store outputs
let computerScore=0;
let playerScore=0;


// Write a function getComputerChoice
// Choose randomly between rock, paper or scissors
function getComputerChoice(){

// Create a random integer between 0 and 2
    let randInt = Math.floor(Math.random()*3)
    // console.log(randInt)

// Assign each integer either rock paper or scissor
// Store the value in computerSelection
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

    // Return computerSelection to the console
    console.log(`Computer selected: ${computerSelection}`)
}

// Write a function getPlayerChoice
function getPlayerChoice(){

//  a) Present a selection of options to choose from
//  b) Give a prompt to enter "rock", "paper" or "scissors"
    playerInput = prompt("Choose wisely: Rock, Paper or Scissors?");

//  make sure the parameter is case-insensitive i.e. make it all lower case
    playerSelection = playerInput.toLowerCase();

//  Check if the input is correct
    if( playerSelection!== "rock" && 
        playerSelection!== "paper" && 
        playerSelection!== "scissors"){
            console.log("wrong input: " + playerSelection)
            getPlayerChoice()
}
    console.log(`Player selected: ${playerSelection}`)
}


// Write a function playRound

function playRound() {

    // Evoke both the Computer and the player input function
    getComputerChoice()
    getPlayerChoice()
    console.log(`${computerSelection} vs ${playerSelection}`)

//  Compare Computer and Player choice 
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
}

//     Update the score board.
//     Return a string that declares the winner of the round
//     e.g. "You Lose! Paper beats Rock"
function playerLost(){
    console.log(`The player lost. ${computerSelection} beats ${playerSelection}`)
    computerScore ++
    return computerScore;
}

function playerWon(){
    console.log(`The player won! ${playerSelection} beats ${computerSelection}`)
    playerScore ++
    return playerScore;
}

function playerTie(){
    console.log("Its a tie.")
}

// Write a function game()
function game(){

    // Inside of this function call the playRound() function to play 5 rounds
                for (let i = 0; i < 5; i++) {
                playRound();
                }
    // Keep the score and report a winner or loser at the end 
                console.log(`The game has finished and the final score is:
                Computer: ${computerScore} points.
                Player: ${playerScore} points.
                /n`)
        }