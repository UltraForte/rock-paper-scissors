// JavaScript for the Rock, Paper, Scissors game.
console.log("Hello World")


const choices = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
    let randomIndex = Math.floor(Math.random() * choices.length);

    let choice = choices[randomIndex];

    return choice;
}
let choice = getComputerChoice(choices);
console.log(choice);