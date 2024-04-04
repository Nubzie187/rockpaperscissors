let playerPoints = 0;
let compPoints = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;

    switch(choice){
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3: 
            return "SCISSORS";
    }
}

function getPlayerChoice() {
    let playerChoice;
    let isValidChoice = false;

    while (!isValidChoice) {
        playerChoice = prompt("Enter ROCK, PAPER, or SCISSORS");
        if (playerChoice) { 
            playerChoice = playerChoice.toUpperCase();
            if (playerChoice === "ROCK" || playerChoice === "PAPER" || playerChoice === "SCISSORS") {
                isValidChoice = true;
            } else {
                alert("Invalid choice, please enter ROCK, PAPER, or SCISSORS.");
            }
        } else {
            alert("You must enter a choice!");
            playerChoice = "ROCK";
            isValidChoice = true;
        }
    }

    return playerChoice;
}

function playRound(){
    let computer = getComputerChoice();
    let player = getPlayerChoice();

    console.log("Player chooses: " + player);
    console.log("Computer chooses: " + computer);
    
    // Check for a draw condition
    if(computer === player){
        console.log("DRAW!");
    } 
    // Check for computer win conditions
    else if((computer === "ROCK" && player === "SCISSORS") || 
            (computer === "PAPER" && player === "ROCK") || 
            (computer === "SCISSORS" && player === "PAPER")){
        compPoints += 1;
    } 
    // If it's not a draw and the computer hasn't won, then the player wins
    else {
        playerPoints += 1;
    }    
}

function gameLoop(){
    let winner = false;

    while(!winner){
        playRound();
        if(playerPoints == 2){
            console.log("You WIN!");
            winner = true;
            //Reset points to play again when button is pressed
            playerPoints = 0;
            compPoints = 0;
        } else if(compPoints == 2){
            console.log("Computer WINS!");
            winner = true;
            //Reset points to play again when button is pressed
            playerPoints = 0;
            compPoints = 0;
        } else {
            console.log("Player Points: " + playerPoints);
            console.log("Computer Points: " + compPoints);
        }
    }
}

document.getElementById("startGameButton").addEventListener("click", gameLoop);