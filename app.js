const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'paper'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'stone'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'stone' && userChoice === "paper") {
    result = 'you win!'
  }
  if (computerChoice === 'stone' && userChoice === "scissors") {
    result = 'you lose!'
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!'
  }
  if (computerChoice === 'paper' && userChoice === "stone") {
    result = 'you lose!'
  }
  if (computerChoice === 'scissors' && userChoice === "stone") {
    result = 'you win!'
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lose!'
  }
  resultDisplay.innerHTML = result
}
