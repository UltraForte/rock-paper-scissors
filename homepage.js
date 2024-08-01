// JavaScript for the Rock, Paper, Scissors game.
console.log("Hello World")


const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choices) {
    let randomIndex = Math.floor(Math.random() * choices.length);

    let choice = choices[randomIndex];

    return choice;
}
let choice = getComputerChoice(choices);
console.log("Computer Chooses:", choice);

//Pseudo Code to getHumanChoice//
//Assign a variable that will contain the users choice
//Declare a function that will get the users choice
//Prompt user to get users choice
//Print users choice in console log

function getHumanChoice() {
    let humanChoice = prompt("Submit your choice: \"Rock\" \"Paper\" or \"Scissors\"");
        if (humanChoice === "Rock" || humanChoice === "Paper" || humanChoice === "Scissors") {
            console.log("You Choose:", humanChoice);
        } else {
            alert("Choose one of the following options: \"Rock\" \"Paper\" or \"Scissors\"");
            getHumanChoice();
        };
};
getHumanChoice();
