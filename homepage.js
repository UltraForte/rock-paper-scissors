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


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "Rock" && computerChoice === "Paper" || computerChoice === "Scissors") {
        console.log("You Win this round!")
    }
    
};
playRound(humanChoice, computerChoice);