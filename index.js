const rpsChoice = ['rock', 'paper', 'scissors']
let userScore = 0, computerScore = 0;
const userScoreEl = document.getElementById('user-score')
const computerScoreEl = document.getElementById('computer-score')
const buttons = document.querySelectorAll('button')
const userChoiceEl = document.getElementById('user-choice')
const computerChoiceEl = document.getElementById('computer-choice')
const announcementEl = document.querySelector('.announcement')
const vsEl = document.querySelector('.vs')
vsEl.style.display = 'none'

userScoreEl.textContent = userScore
computerScoreEl.textContent = computerScore

buttons.forEach(button=>{
  button.addEventListener('click', playRound)
})

function playRound(e){
  const computerChoice = getComputerChoice()
  const userChoice = e.target.textContent.toLowerCase()
  let resultText = ''
  
  computerChoiceEl.textContent = computerChoice
  userChoiceEl.textContent = userChoice
  if(userChoice == 'scissors' && computerChoice == 'paper'){
    resultText = "You won!"
    userScore ++
  } else if (userChoice == 'paper' && computerChoice == 'rock'){
    resultText = "You won!"
    userScore ++
  } else if (userChoice == 'rock' && computerChoice == 'scissors'){
    resultText = "You won!"
    userScore ++
  } else if (userChoice == computerChoice){
    resultText = "It is a tie"
  } else{
    resultText = "You Lost!"
    computerScore ++
  }

  announcementEl.textContent = resultText
  userScoreEl.textContent = userScore
  vsEl.style.display = 'block'
  computerScoreEl.textContent = computerScore
}
function getComputerChoice(){
  const ranNum = Math.floor(Math.random()*3)
  return rpsChoice[ranNum]
}


// function playRound(humanChoice, computerChoice){
//   // Below handles invalid choice
//   if(!rpsChoice.includes(humanChoice)){
//     console.log("You entered an invalid choice")
//     return
//   }
// }

// function playGame(){
//   const humanChoice = getHumanChoice()
//   if (humanChoice === null) return;
//   const computerChoice = getComputerChoice()
//   playRound(humanChoice, computerChoice)
// }

// playGame()
// playGame()
// playGame()
// playGame()
// playGame()
// console.log("Your score: " + humanScore)
// console.log("Computer's score: " + computerScore)