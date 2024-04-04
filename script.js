let points = 0;

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
    
    // Check for a draw condition
    if(computer === player){
        result = "DRAW!";
    } 
    // Check for computer win conditions
    else if((computer === "ROCK" && player === "SCISSORS") || 
            (computer === "PAPER" && player === "ROCK") || 
            (computer === "SCISSORS" && player === "PAPER")){
        points -= 1;
    } 
    // If it's not a draw and the computer hasn't won, then the player wins
    else {
        points += 1;
    }
}

function gameLoop(){
    let winner = false;

    while(!winner){
        playRound();
        if(points === 2){
            console.log("YOU WIN!!");
            winner = true;
        } else if(points === -3){
            console.log("Computer WINS!!");
            winner = true;
        } else {
            console.log("Player has " + points + " points.");
            console.log("Computer has " + (points * -1) + " points.");
        }        
    }
}

document.getElementById("startGameButton").addEventListener("click", function() {
    gameLoop();
});