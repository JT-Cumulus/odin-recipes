// Function to get computer choice in RPS
function getComputerChoice(){
    let choices = ['Rock', 'Scissor', 'Paper']

    return choices[Math.floor(Math.random() * 3)]
}

// Function to get player choice
function getPlayerChoice(){
    return
}

// Function to evaluate victor
function playRound(playerChoice, computerChoice){
    let outcome = playerChoice.toLowerCase() + computerChoice.toLowerCase()
    let winCase = ['rockscissor', 'paperrock', 'scissorpaper']
    let loseCase = ['scissorrock', 'rockpaper', 'paperscissor']

    if(playerChoice.toLowerCase() == computerChoice.toLowerCase()){
        return 'Draw'
    }

    if(winCase.includes(outcome)){
        return 'Player Wins'
    }
    
    if(loseCase.includes(outcome)){
        return 'Computer Wins'
    }

}

const playerTemp = 'paper'
console.log(playRound(playerTemp, getComputerChoice()))