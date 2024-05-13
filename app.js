let humanScore = 0;
let computerScore = 0;
let options = ["rock", "paper", "scissor"];
let round = 1;
let computerChoice;
let humanChoice;

let h2 = document.querySelector("h2");
let p = document.querySelector(".txt p");

let userWeaponDiv = document.querySelector("#user-weapon");
let H_score = document.createElement("p");
H_score.textContent = `Player: ${humanScore}`;
userWeaponDiv.appendChild(H_score);

let computerWeaponDiv = document.querySelector("#computer-weapon");
let C_score = document.createElement("p");
C_score.textContent = `Computer: ${computerScore}`;
computerWeaponDiv.appendChild(C_score);

while(round <= 5){
    // playGame();
    round++;
}
setTimeout(() => {
    p.remove();
    console.log(`Player score: ${humanScore} Computer score: ${computerScore}`);

    if(humanScore == computerChoice){
        h2.innerText = "It's a tie!";
    }
    else if(humanScore > computerScore){
        h2.innerText = "Congratulations! You Won The Game";

    }
    else {
        h2.innerText = "Sorry! You Lost";
    }
}, 2000);


function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    return options[num];
}

function getHumanChoice(){
    let choice = prompt("Enter choice in numbers:     1.Rock   2.Paper   3.Scissor");
    return options[choice-1];
}

function playGame(){
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);

    function playRound(humanChoice, computerChoice) {
        console.log(`Your weapon : ${humanChoice}`);
        console.log(`Computer weapon : ${computerChoice}`);

        if(humanChoice == computerChoice) {
            h2.innerText = "It's a tie!"
            p.innerText = `${humanChoice} ties with ${computerChoice}`;
            console.log(`${humanChoice} ties with ${computerChoice}`);
        }
        else if(humanChoice == "rock"){
            if(computerChoice == "paper"){
                lost();
            }
            else if(computerChoice == "scissor"){
                won();
            }
        }
        else if(humanChoice == "paper"){
            if(computerChoice == "scissor"){
                lost();
            }
            else if(computerChoice == "rock"){
                won();
            }
        }
        else if(humanChoice == "scissor"){
            if(computerChoice == "rock"){
                lost();
            }
            else if(computerChoice == "paper"){
                won();
            }
        }
    }
}

function won(){
    h2.innerText = "You Won!"
    p.innerText = `${humanChoice} beats ${computerChoice}`;
    console.log(`${humanChoice} beats ${computerChoice}`);
    humanScore++;
}
function lost(){
    h2.innerText = "You Lost!"
    p.innerText = `${humanChoice} is beaten by ${computerChoice}`;
    console.log(`${humanChoice} is beaten by ${computerChoice}`);
    computerScore++;
}