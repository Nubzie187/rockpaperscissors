let playerPoints = 0;
let compPoints = 0;
let playerChoice = "";
const choiceButtons = document.querySelectorAll(".choice-btn");
const resetButton = document.getElementById("reset");

const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
    playerChoice = "ROCK";
    playRound();
})

const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
    playerChoice = "PAPER";
    playRound();
});

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => {
    playerChoice = "SCISSORS";
    playRound();
});

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

function disableButtons(){
    choiceButtons.forEach(button => {
        button.disabled = true;
    });    
}

function resetGame(){
    resetButton.addEventListener("click", () => {
        window.location.reload();
    });
}

function playRound(){
    let computer = getComputerChoice();
    let player = playerChoice;
    const playerScore = document.getElementById("player-score");
    const compScore = document.getElementById("cpu-score");
    const roundStatus = document.getElementById("round-winner");

    console.log("Player chooses: " + player);
    console.log("Computer chooses: " + computer);
    
    // Check for a draw condition
    if(computer === player){
        roundStatus.textContent = "DRAW!";
    } 
    // Check for computer win conditions
    else if((computer === "ROCK" && player === "SCISSORS") || 
            (computer === "PAPER" && player === "ROCK") || 
            (computer === "SCISSORS" && player === "PAPER")){
        compPoints += 1;
        roundStatus.textContent = "Computer wins this round!";
        compScore.textContent = compPoints;
    } 
    // If it's not a draw and the computer hasn't won, then the player wins
    else {
        playerPoints += 1;
        roundStatus.textContent = "You win this round!";
        playerScore.textContent = playerPoints;
    }    
    if(playerPoints === 5){
        roundStatus.textContent = "YOU WIN!";
        disableButtons();
        resetButton.style.visibility = "visible";
        resetGame();
    } else if(compPoints === 5){
        roundStatus.textContent = "YOU LOSE";
        disableButtons();
        resetButton.style.visibility = "visible";
        resetGame();
    }
}