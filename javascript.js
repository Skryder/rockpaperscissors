



let humanScore = 0;
let computerScore = 0;
const NUM_ROUNDS = 5;


let rockBtn = document.querySelector('#rockBtn');
let scissorsBtn = document.querySelector('#scissorsBtn');
let paperBtn = document.querySelector('#paperBtn');

let round = document.querySelector('#round');
let roundCount = 1;
const results = document.querySelector('#results');

rockBtn.addEventListener('click', () => {onChoice("rock")});

scissorsBtn.addEventListener('click', () => {onChoice("scissors")});

paperBtn.addEventListener('click', () => {onChoice("paper")});

function onChoice(choice) {
    const roundStatus = document.createElement("p");
    roundStatus.classList.add("roundStatus");

    roundStatus.textContent = playRound(choice, getComputerChoice());
    roundCount++;
    round.textContent = `Round ${roundCount}! FIGHT!`
    results.appendChild(roundStatus);

    if (roundCount == 6) {
        const endMessage = document.createElement("h2");
        const winner = document.createElement('h1');
        endMessage.textContent = "GAME END!";
        if (humanScore > computerScore)
            winner.textContent = "YOU WIN THE GAME!";
        else if (humanScore === computerScore)
             winner.textContent = "ITS A TIE!";
        else  winner.textContent = "YOU LOST THE GAME! :("

        results.appendChild(endMessage);
        results.appendChild(winner);

        disableButtons();
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    scissorsBtn.disabled = true;
    paperBtn.disabled = true;
}

function getComputerChoice() {
    let choice = Math.ceil(Math.random()*3);
    /*console.log(choice);*/
    switch(choice) {
        case 1: return "paper";
        case 2: return "scissors";
        case 3: return "rock";
        default: return "uhhh";
    }
}

function choiceTest() {
    let errors = 0;
    for (let ii = 0; ii < 10000; ii++)
    {
        errors = getComputerChoice() === "uhhh" ? errors++: errors;
    }
    console.log(errors);
}

function getHumanChoice() {
    let choice = prompt("Paper, Scissors, ROCK!");

    if (choice.toLowerCase() === "paper" || 
            choice.toLowerCase() === "scissors" ||
            choice.toLowerCase() === "rock") {
        return choice.toLowerCase();
    }else {
        computerScore++;
        return "FOOL, you LOSE by default";
    } 
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "paper": switch (computerChoice) {
            case "paper": return "DRAW";
            case "scissors": computerScore++; return "YOU LOSE";
            case "rock": humanScore++; return "YOU WIN";
        }
        case "scissors": switch (computerChoice) {
            case "scissors": return "DRAW";
            case "rock": computerScore++; return "YOU LOSE";
            case "paper": humanScore++; return "YOU WIN";
        }
        case "rock": switch (computerChoice) {
            case "rock": return "DRAW";
            case "paper": computerScore++; return "YOU LOSE";
            case "scissors": humanScore++; return "YOU WIN";
        }
        default: return humanChoice;
    }
}

function playGame()
{
    /*for (let ii = 0; ii < NUM_ROUNDS; ii++)
    {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }*/
    console.log("GAME END!");
    if (humanScore > computerScore)
        console.log("YOU WIN THE GAME!");
    else if (humanScore === computerScore)
        console.log("ITS A TIE!");
    else console.log("YOU LOST THE GAME! :(")
}




//playGame();

