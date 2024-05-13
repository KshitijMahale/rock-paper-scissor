let started = true;
let humanScore = 0;
let computerScore = 0;
let options = ["rock", "paper", "scissor"];
let round = 0;
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

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let sign = document.createElement("p");
sign.className = "sign";

rock.addEventListener("click", () => {
    getHumanChoice("rock");
});

paper.addEventListener("click", () => {
    getHumanChoice("paper");
});

scissor.addEventListener("click", () => {
    getHumanChoice("scissor");
});

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    let sign = document.createElement("p");
    sign.className = "sign";
    if(num == 0){
        sign.textContent = "✊";
    }
    else if(num == 1){
        sign.textContent = "✋";
    }
    else if(num == 2){
        sign.textContent = "✌";
    }
    computerWeaponDiv.appendChild(sign);

    if (computerWeaponDiv.children.length > 2) { //clear previous choice
        computerWeaponDiv.removeChild(computerWeaponDiv.children[1]);
    }
    return options[num];
}

function getHumanChoice(choice) {
    if(started){
        let sign = document.createElement("p");
        sign.className = "sign";
        sign.textContent = getSignEmoji(choice);
        userWeaponDiv.appendChild(sign);
    
        if (userWeaponDiv.children.length > 2) { //clear previous choice
            userWeaponDiv.removeChild(userWeaponDiv.children[1]);
        }
        playGame(choice);
        if(round == 5){
            setTimeout(()=>{
                p.innerText = "Refresh the page to play again"
                console.log(`Player score: ${humanScore} Computer score: ${computerScore}`);
            
                if(humanScore == computerScore){
                    h2.innerText = "It's a tie!";
                }
                else if(humanScore > computerScore){
                    h2.innerText = "Congratulations! You Won The Game";
                }
                else {
                    h2.innerText = "Sorry! You Lost";
                }
                started = false;
            }, 1000);
        }
    }
}

function getSignEmoji(choice) {
    if (choice === "rock") return "✊";
    else if (choice === "paper") return "✋";
    else if (choice === "scissor") return "✌";
}

function playGame(choice){
    round++;
    console.log(round);
    humanChoice = choice;
    computerChoice = getComputerChoice();

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
    console.log(`p: ${humanScore}   C:${computerScore}`);
    H_score.textContent = `Player: ${humanScore}`;
    C_score.textContent = `Computer: ${computerScore}`;
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