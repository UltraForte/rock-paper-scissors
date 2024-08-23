// JavaScript for the Rock, Paper, Scissors game.
console.log("Hello World")
//Create the permanent elements in the DOM
const scoreBoard = document.createElement("div");
let humanScoreTxt = document.createElement("p");
let computerScoreTxt = document.createElement("p");
const choiceDisp = document.createElement("div");
let humanChoiceTxt = document.createElement("p");
let computerChoiceTxt = document.createElement("p");

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

    displayChoices();
    displayScore();


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
        let humanWinsTxt = document.createElement("p")
        humanWinsTxt.textContent = `You Win the Game!`;
        buttonsDiv.remove();
        selectionText.remove();
        gameText.appendChild(humanWinsTxt);

        const playAgainBtn = document.createElement("button");
        playAgainBtn.textContent = "Play Again";
        document.body.appendChild(playAgainBtn);
        playAgainBtn.addEventListener("click", () => {
            gameText.remove();
            choiceDisp.remove();
            scoreBoard.remove();
            playAgainBtn.remove();
            playAgain();
        });
    } else if (computerScore === 5) {
        console.log("You lost! Computer Wins the Game!");
        const computerWinsGame = document.createElement("div");
        let computerWinsTxt = document.createElement("p")
        computerWinsTxt.textContent = `You lost! Computer Wins the Game!`;
        buttonsDiv.remove();
        selectionText.remove();
        gameText.appendChild(computerWinsTxt);

        const playAgainBtn = document.createElement("button");
        playAgainBtn.textContent = "Play Again";
        document.body.appendChild(playAgainBtn);
        playAgainBtn.addEventListener("click", () => {
            gameText.remove();
            choiceDisp.remove();
            scoreBoard.remove();
            playAgainBtn.remove();
            playAgain();
        });
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
};
let computerChoice = getComputerChoice(choices);
computerChoiceTxt.textContent = `Computer chooses: `+ computerChoice;
console.log("Computer Chooses:", computerChoice);

//Get human choice:
let humanChoice = playerSelection;
humanChoiceTxt.textContent = `You choose: `+ humanChoice;
console.log("You Choose:", humanChoice);

//Display outcome:
function displayOutcome(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You Win. Rock beats Scissors!");
        humanScore = humanScore + 1;
        humanScoreTxt.textContent = `Your score is: `+ humanScore;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You Win. Paper beats Rock!");
        humanScore = humanScore + 1;
        humanScoreTxt.textContent = `Your score is: `+ humanScore;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You Win. Scissors beat Paper!");
        humanScore = humanScore + 1;
        humanScoreTxt.textContent = `Your score is: `+ humanScore;
//above are human win conditions, below are computer win conditions//

    } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        console.log("Computer Wins. Rock beats Scissors");
        computerScore = computerScore + 1;
        computerScoreTxt.textContent = `Computers score is: `+ computerScore;
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        console.log("Computer Wins. Paper beats Rock");
        computerScore = computerScore + 1;
        computerScoreTxt.textContent = `Computers score is: `+ computerScore;
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        console.log("Computer Wins. Scissors beat Paper");
        computerScore = computerScore + 1;
        computerScoreTxt.textContent = `Computers score is: `+ computerScore;
    } else {
        console.log("There has been en error");
    };
};
displayOutcome(humanChoice, computerChoice);
};

//Display Score on the page
function displayScore() {
    humanScoreTxt.textContent = `Your score is: `+ humanScore;
    computerScoreTxt.textContent = `Computers score is: `+ computerScore;
    scoreBoard.appendChild(humanScoreTxt);
    scoreBoard.appendChild(computerScoreTxt);
    document.body.appendChild(scoreBoard);
};

//Display the selections on the page
function displayChoices() {
    humanChoiceTxt.textContent = `You choose: `;
    computerChoiceTxt.textContent = `Computer chooses: `;
    choiceDisp.appendChild(humanChoiceTxt);
    choiceDisp.appendChild(computerChoiceTxt);
    document.body.insertBefore(choiceDisp, gameText);
};


//////////////////////////////////////////////////////////////
//This is the same code as above, except modified to create
//the correct elements again,to try to make it work.
//This is a 2nd attempt to make it work, from scratch.
function playAgain() {
    humanScore -= humanScore;
    computerScore -= computerScore;
    
    const scoreBoard = document.createElement("div");
    let humanScoreTxt = document.createElement("p");
    let computerScoreTxt = document.createElement("p");
    const choiceDisp = document.createElement("div");
    let humanChoiceTxt = document.createElement("p");
    let computerChoiceTxt = document.createElement("p");

    const buttonsDiv = document.createElement("div");
    const rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";
    const paperBtn = document.createElement("button");
    paperBtn.textContent = "Paper";
    const scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "Scissors";
    
//New Code:
    const gameText = document.createElement("div");
    document.body.appendChild(gameText);
    document.body.appendChild(buttonsDiv);
    const selectionText = document.createElement("p");
    selectionText.textContent = "Make your selection:";
    gameText.appendChild(selectionText);
//New Code ends here.

    buttonsDiv.appendChild(rockBtn);
    buttonsDiv.appendChild(paperBtn);
    buttonsDiv.appendChild(scissorsBtn);

    function displayChoices() {
        humanChoiceTxt.textContent = `You choose: `;
        computerChoiceTxt.textContent = `Computer chooses: `;
        choiceDisp.appendChild(humanChoiceTxt);
        choiceDisp.appendChild(computerChoiceTxt);
        document.body.insertBefore(choiceDisp, gameText);
    };
    displayChoices();
    function displayScore() {
        humanScoreTxt.textContent = `Your score is: `+ humanScore;
        computerScoreTxt.textContent = `Computers score is: `+ computerScore;
        scoreBoard.appendChild(humanScoreTxt);
        scoreBoard.appendChild(computerScoreTxt);
        document.body.appendChild(scoreBoard);
    };
    displayScore();


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
        let humanWinsTxt = document.createElement("p")
        humanWinsTxt.textContent = `You Win the Game!`;
        buttonsDiv.remove();
        selectionText.remove();
        gameText.appendChild(humanWinsTxt);

        const playAgainBtn = document.createElement("button");
        playAgainBtn.textContent = "Play Again";
        document.body.appendChild(playAgainBtn);
        playAgainBtn.addEventListener("click", () => {
            gameText.remove();
            choiceDisp.remove();
            scoreBoard.remove();
            playAgainBtn.remove();
            playAgain();
        });
    } else if (computerScore === 5) {
        console.log("You lost! Computer Wins the Game!");
        const computerWinsGame = document.createElement("div");
        let computerWinsTxt = document.createElement("p")
        computerWinsTxt.textContent = `You lost! Computer Wins the Game!`;
        buttonsDiv.remove();
        selectionText.remove();
        gameText.appendChild(computerWinsTxt);

        const playAgainBtn = document.createElement("button");
        playAgainBtn.textContent = "Play Again";
        document.body.appendChild(playAgainBtn);
        playAgainBtn.addEventListener("click", () => {
            gameText.remove();
            choiceDisp.remove();
            scoreBoard.remove();
            playAgainBtn.remove();
            playAgain();
        });
    };
};


function playRound(playerSelection) {
    const choices = ["Rock", "Paper", "Scissors"];
    function getComputerChoice(choices) {
        let randomIndex = Math.floor(Math.random() * choices.length);
        let choice = choices[randomIndex];
        return choice;
    };
    let computerChoice = getComputerChoice(choices);
    computerChoiceTxt.textContent = `Computer chooses: `+ computerChoice;
    console.log("Computer Chooses:", computerChoice);

//Get human choice:
    let humanChoice = playerSelection;
    humanChoiceTxt.textContent = `You choose: `+ humanChoice;
    console.log("You Choose:", humanChoice);

//Display outcome:
    function displayOutcome(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            console.log("You Win. Rock beats Scissors!");
            humanScore = humanScore + 1;
            humanScoreTxt.textContent = `Your score is: `+ humanScore;
        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            console.log("You Win. Paper beats Rock!");
            humanScore = humanScore + 1;
            humanScoreTxt.textContent = `Your score is: `+ humanScore;
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            console.log("You Win. Scissors beat Paper!");
            humanScore = humanScore + 1;
            humanScoreTxt.textContent = `Your score is: `+ humanScore;
//above are human win conditions, below are computer win conditions//

        } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
            console.log("Computer Wins. Rock beats Scissors");
            computerScore = computerScore + 1;
            computerScoreTxt.textContent = `Computers score is: `+ computerScore;
        } else if (computerChoice === "Paper" && humanChoice === "Rock") {
            console.log("Computer Wins. Paper beats Rock");
            computerScore = computerScore + 1;
            computerScoreTxt.textContent = `Computers score is: `+ computerScore;
        } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
            console.log("Computer Wins. Scissors beat Paper");
            computerScore = computerScore + 1;
            computerScoreTxt.textContent = `Computers score is: `+ computerScore;
        } else {
            console.log("There has been en error");
        };
    };
    displayOutcome(humanChoice, computerChoice);
    };
};
