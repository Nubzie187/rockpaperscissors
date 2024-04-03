function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    return choice;
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
    
    console.log("Computer chooses: " + computer);
    console.log("Player chooses: " + player);
    
    //Check for a draw condition
    if(computer === 1 && player === "ROCK" || computer === 2 && player === "PAPER" || computer === 3 && player === "SCISSORS"){
        console.log("DRAW!");
    } 
    
    //1 = ROCK
    //2 = PAPER
    //3 = SCISSORS
    if(computer === 1 && player === "SCISSORS" || computer === 2 && player === "ROCK" || computer === 3 && player === "PAPER"){
        let result = console.log("Computer WINS!!");
    } else {
        let result = console.log("YOU WIN!!");
    }  

    return result;
}

console.log(playRound());