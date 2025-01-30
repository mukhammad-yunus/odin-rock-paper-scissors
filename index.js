const rpsChoice = ['rock', 'paper', 'scissors']
let humanScore = 0, computerScore = 0;

function getComputerChoice(){
  const ranNum = Math.floor(Math.random()*3)
  return rpsChoice[ranNum]
}

function getHumanChoice(){
  let humanChoice = prompt("What do you choose: 'Rock', 'Paper' or 'Scissors'? Write it below.")
  if (humanChoice === null) {
    console.log("You cancelled the prompt. Exiting the game.");
    return null;  // Or you can return a default value or ask again if preferred
  }
  return humanChoice.toLowerCase()
}

function playRound(humanChoice, computerChoice){
  // Below handles invalid choice
  if(!rpsChoice.includes(humanChoice)){
    console.log("You entered an invalid choice")
    return
  }
  if(humanChoice == 'scissors' && computerChoice == 'paper'){
    console.log("You won!")
    humanScore ++
  } else if (humanChoice == 'paper' && computerChoice == 'rock'){
    console.log("You won!")
    humanScore ++
  } else if (humanChoice == 'rock' && computerChoice == 'scissors'){
    console.log("You won!")
    humanScore ++
  } else if (humanChoice == computerChoice){
    console.log("It is a tie")
  } else{
    console.log("You Lost!")
    computerScore ++
  }
}

function playGame(){
  const humanChoice = getHumanChoice()
  if (humanChoice === null) return;
  const computerChoice = getComputerChoice()
  playRound(humanChoice, computerChoice)
}

playGame()
playGame()
playGame()
playGame()
playGame()
console.log("Your score: " + humanScore)
console.log("Computer's score: " + computerScore)