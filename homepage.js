// JavaScript for the Rock, Paper, Scissors game.
console.log("Hello World")


const buttonsDiv = document.getElementById("buttons");
const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";

const startBtn = document.querySelector("#startGame");
startBtn.addEventListener("click", () => {
    let welcomeText = document.getElementById("welcomeText");
    welcomeText.remove();
    startBtn.remove();

    const gameText = document.querySelector("#gameText");
    const selectionText = document.createElement("p");
    selectionText.textContent = "Make your selection:";
    gameText.appendChild(selectionText);

    buttonsDiv.appendChild(rockBtn);
    buttonsDiv.appendChild(paperBtn);
    buttonsDiv.appendChild(scissorsBtn);


    rockBtn.addEventListener("click", () => {
        let playerSelection = "Rock";
        playRound(playerSelection);
        console.log("Your score is:", humanScore, "Computer score is:", computerScore);
        checkScore();
    });
    paperBtn.addEventListener("click", () => {
        let playerSelection = "Paper";
        playRound(playerSelection);
        console.log("Your score is:", humanScore, "Computer score is:", computerScore);
        checkScore();
    });
    scissorsBtn.addEventListener("click", () => {
        let playerSelection = "Scissors";
        playRound(playerSelection);
        console.log("Your score is:", humanScore, "Computer score is:", computerScore);
        checkScore();
    });

function checkScore() {
    if (humanScore === 5) {
        console.log("You Win the Game!");
//      console.log("Your score is:", humanScore, "Computer score is:", computerScore);
    } else if (computerScore === 5) {
        console.log("You lost! Computer Wins the Game!");
//      console.log("Your score is:", humanScore, "Computer score is:", computerScore);
    };
};

});
//These score variables must be at global scope, 
//otherwise they will get reset to 0 every round.
let humanScore = 0
let computerScore = 0





function playRound(playerSelection) {

const choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice(choices) {
    let randomIndex = Math.floor(Math.random() * choices.length);

    let choice = choices[randomIndex];

    return choice;
}
let computerChoice = getComputerChoice(choices);
console.log("Computer Chooses:", computerChoice);

//Get human choice:
let humanChoice = playerSelection;
console.log("You Choose:", humanChoice);

//Display outcome:
function displayOutcome(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You Win. Rock beats Scissors!");
        humanScore = humanScore + 1;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You Win. Paper beats Rock!");
        humanScore = humanScore + 1;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You Win. Scissors beat Paper!");
        humanScore = humanScore + 1;
//above are human win conditions, below are computer win conditions//

    } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        console.log("Computer Wins. Rock beats Scissors");
        computerScore = computerScore + 1;
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        console.log("Computer Wins. Paper beats Rock");
        computerScore = computerScore + 1;
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        console.log("Computer Wins. Scissors beat Paper");
        computerScore = computerScore + 1;
    } else {
        console.log("There has been en error");
    };
};
displayOutcome(humanChoice, computerChoice);
};
