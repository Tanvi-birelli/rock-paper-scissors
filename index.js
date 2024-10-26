const choices=["rock","paper","scissors"]
const player= document.getElementById("player");
const computer= document.getElementById("computer");
const resultElement= document.getElementById("resultElement");
const playerScoreElement= document.getElementById("playerScore");
const computerScoreElement= document.getElementById("computerScore");
let playerScore=0;
let computerScore=0;

function playGame(playerChoice){

    player.innerText="Player:"
    computer.innerText="Computer:"
    resultElement.innerText=""

    resultElement.classList.remove('greentext')
    resultElement.classList.remove('redtext')

    let computerChoice = choices[Math.floor(Math.random()*3)]

    let result;
    if (playerChoice===computerChoice){
        result = "IT'S A TIE!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice==="scissors")?"YOU WIN!":"YOU LOSE!"
                break;
            case "paper":
                result = (computerChoice==="rock")?"YOU WIN!":"YOU LOSE!"
                break;
            case "scissors":
                result = (computerChoice==="paper")?"YOU WIN!":"YOU LOSE!"
                break;
        }
    }

    if (result==="YOU WIN!"){
        playerScore+=1
        resultElement.classList.add('greentext');
    }
    else if(result==="YOU LOSE!"){
        computerScore+=1
        resultElement.classList.add('redtext');
    }

    playerScoreElement.innerText=`Player Score: ${playerScore}`
    computerScoreElement.innerText=`Computer Score: ${computerScore}`
    player.innerText+=playerChoice
    computer.innerText+=computerChoice
    resultElement.innerText+=result
    
}

