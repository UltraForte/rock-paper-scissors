// JavaScript for the Rock, Paper, Scissors game.
console.log("Hello World")

//Play 5 rounds of the Game//
function playGame() {
    for (let i = 1; i <= 5; i++) {


const choices = ["Rock", "Paper", "Scissors"];


//Pseudo Code to getHumanChoice//
//Assign a variable that will contain the users choice
//Declare a function that will get the users choice
//Prompt user to get users choice
//Print users choice in console log

function getHumanChoice() {
    let humanChoice = prompt("Submit your choice: \"Rock\" \"Paper\" or \"Scissors\"").toLowerCase();
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            //the one line below capitalizes the first letter of the displayed humanChoice//
            return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        } else {
            alert("Choose one of the following options: \"Rock\" \"Paper\" or \"Scissors\"");
            getHumanChoice();
        };
};
let humanChoice = getHumanChoice();
console.log("You Choose:", humanChoice);



//Get computers choice//
function getComputerChoice(choices) {
    let randomIndex = Math.floor(Math.random() * choices.length);

    let choice = choices[randomIndex];

    return choice;
}
let computerChoice = getComputerChoice(choices);
console.log("Computer Chooses:", computerChoice);



//Play 1 round of the game//

function playRound(humanChoice, computerChoice) {
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
playRound(humanChoice, computerChoice);
// rock      beats, scissors
// scissors  beat paper
// paper     beats rock
};
};

//These score variables must be at global scope, 
//otherwise they will get reset to 0 every round.
let humanScore = 0
let computerScore = 0
//This call to function starts the game//
playGame();

if (humanScore > computerScore) {
    console.log("You Win the Game!");
    console.log("Your score is:", humanScore, "Computer score is:", computerScore);
} else if (computerScore > humanScore) {
    console.log("You lost! Computer Wins the Game!");
    console.log("Your score is:", humanScore, "Computer score is:", computerScore);
} else {
    console.log("The game is a tie!");
    console.log("Your score is:", humanScore, "Computer score is:", computerScore);
};
