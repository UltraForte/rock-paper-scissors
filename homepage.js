// JavaScript for the Rock, Paper, Scissors game.
console.log("Hello World")


const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choices) {
    let randomIndex = Math.floor(Math.random() * choices.length);

    let choice = choices[randomIndex];

    return choice;
}
let computerChoice = getComputerChoice(choices);
console.log("Computer Chooses:", computerChoice);

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


let humanScore = 0
let computerScore = 0
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