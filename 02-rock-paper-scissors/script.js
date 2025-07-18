function getComputeraChoice() {
    let randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        return 'rock'
    } else if (randomNum === 1) {
        return 'paper'
    } else if ( randomNum === 2){
        return 'scissors'
    } else {
        return randomNum
    }
}

function getHumanChoice() {
    let choice = prompt('rock, paper, or scissors?', 'None')
    return choice
}

let humanScore = 0
let computerScore = 0

function playRound() {
    const humanChoice = getHumanChoice().toLowerCase();
    const computerChoice = getComputeraChoice();

    if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice == 'scissors' && computerChoice == 'paper')) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
    } else if ((humanChoice === 'rock' && computerChoice === 'paper') || (humanChoice === 'paper' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'rock')) {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
    } else if ((humanChoice === 'rock' && computerChoice === 'rock') || (humanChoice === 'paper' && computerChoice === 'paper') || (humanChoice === 'scissors' && computerChoice === 'scissors')) {
        console.log(`Draw! ${humanChoice} and ${computerChoice}.`)
    } else {
        console.log('Something went wrong.')
    }
}

function playGame() {
    for (i=0; i<5; i++) {
        playRound()
    }

    if (humanScore > computerScore) {
        console.log(`GAME OVER! You win! ${humanScore} to ${computerScore}.`)
    } else if (humanScore < computerScore) {
        console.log(`GAME OVER! You lose! ${humanScore} to ${computerScore}.`)
    } else if (humanScore === computerScore) {
        console.log(`GAME OVER! Draw! ${humanScore} to ${computerScore}.`)
    }
}

playGame()