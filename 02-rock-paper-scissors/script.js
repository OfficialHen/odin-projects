let humanScore = 0
let computerScore = 0

// References to html document
const title = document.querySelector(".title")
const score = document.querySelector(".score")
const buttons = document.querySelectorAll("button")

// Ending pop-up
const newDiv = document.createElement("div")
const overall = document.createElement("h1")
const newGame = document.createElement("button")

newDiv.appendChild(overall); newDiv.appendChild(newGame)
newGame.textContent = "New Game?"
newDiv.style.cssText = "display: flex; flex-direction: column; align-items: center;"

buttons.forEach(button => {
    button.addEventListener("click", () => {playRound(button.className)})
})

function beganGame() {
    humanScore = 0;
    computerScore = 0;
    title.textContent = 'Start Round'
    score.textContent = `Score: ${humanScore} - ${computerScore}`
    
    buttons.forEach(button => {
        button.disabled = false
    })
}
beganGame()

function endGame() {
    buttons.forEach(button => {
        button.disabled = true
    })
}

newGame.addEventListener('click', () => {
    document.body.removeChild(newDiv)
    beganGame()
})


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

function playRound(humanChoice) {
    const computerChoice = getComputeraChoice();

    if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice == 'scissors' && computerChoice == 'paper')) {
        humanScore++;
        title.textContent = `You win! ${humanChoice} beats ${computerChoice}.`
    } else if ((humanChoice === 'rock' && computerChoice === 'paper') || (humanChoice === 'paper' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'rock')) {
        computerScore++;
        title.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`
    } else if ((humanChoice === 'rock' && computerChoice === 'rock') || (humanChoice === 'paper' && computerChoice === 'paper') || (humanChoice === 'scissors' && computerChoice === 'scissors')) {
       title.textContent = `Draw! ${humanChoice} and ${computerChoice}.`
    } else {
        title.textContent = 'Something went wrong.'
    }
    score.textContent = `Score: ${humanScore} - ${computerScore}`

    if (humanScore >= 5 || computerScore >= 5) {
        playGame()
    }
}

function playGame() {
    endGame()

    if (humanScore > computerScore) {
        overall.textContent = `GAME OVER! You win! ${humanScore} to ${computerScore}.`
    } else if (humanScore < computerScore) {
        overall.textContent = `GAME OVER! You lose! ${humanScore} to ${computerScore}.`
    } else if (humanScore === computerScore) {
        overall.textContent = `GAME OVER! Draw! ${humanScore} to ${computerScore}.`
    }

    document.body.appendChild(newDiv)
}

