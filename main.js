console.log('Hello')

function computerPlay() {

    let random = Math.floor(Math.random() * 3)
    if (random === 0){
        return 'rock'
    } else if (random === 1) {
        return 'scissors'
    }else {
        return 'paper'    
}}

document.getElementById("computer").onclick = computerPlay;

function playerSelect() {

    let choice = window.prompt('Enter your choice: ')
    choice = choice.toLowerCase()
    if (choice === 'scissors' || choice === 'paper' || choice === 'rock'){
        return choice
    } else  return alert('Please enter rock, paper or scissors')
}

document.getElementById('human').onclick = playerSelect;

function playRound() {

    const playerSelection = playerSelect()
    const computerSelection = computerPlay()
    if (playerSelection === computerSelection){
        console.log('Tie! You picked '+ playerSelection + ' and computer picked '+ computerSelection)
        return 'tie'
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('You lose! You picked '+ playerSelection + ' and computer picked '+ computerSelection)
        return 'lose'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('You lose! You picked '+ playerSelection + ' and computer picked '+ computerSelection)
        return 'lose'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log('You lose! You picked '+ playerSelection + ' and computer picked '+ computerSelection)
        return 'lose'
    } else {
        console.log('You Win! You picked '+ playerSelection + ' and computer picked '+ computerSelection)
        return 'win'
} 

}

document.getElementById('play round').onclick = playRound;

function playGame() {

    let computerScore = 0
    let playerScore = 0
    let round = playRound()
        
    if (round === 'win'){
        playerScore = playerScore + 1
        console.log('Player score: '+playerScore)
    } else if (round === 'lose'){
        computerScore = computerScore + 1
        console.log('Computer score: '+computerScore)
    }

    round = playRound()
        
    if (round === 'win'){
        playerScore = playerScore + 1
        console.log('Player score: '+playerScore)
    } else if (round === 'lose'){
        computerScore = computerScore + 1
        console.log('Computer score: '+computerScore)
    }

    round = playRound()
        
    if (round === 'win'){
        playerScore = playerScore + 1
        console.log('Player score: '+playerScore)
    } else if (round === 'lose'){
        computerScore = computerScore + 1
        console.log('Computer score: '+computerScore)
    }

    round = playRound()
        
    if (round === 'win'){
        playerScore = playerScore + 1
        console.log('Player score: '+playerScore)
    } else if (round === 'lose'){
        computerScore = computerScore + 1
        console.log('Computer score: '+computerScore)
    }

    round = playRound()
        
    if (round === 'win'){
        playerScore = playerScore + 1
        console.log('Player score: '+playerScore)
    } else if (round === 'lose'){
        computerScore = computerScore + 1
        console.log('Computer score: '+computerScore)
    }

    round = playRound()
        
    if (round === 'win'){
        playerScore = playerScore + 1
        console.log('Player score: '+playerScore)
    } else if (round === 'lose'){
        computerScore = computerScore + 1
        console.log('Computer score: '+computerScore)
    }

    return console.log('Player Score is: '+playerScore+' and Computer Score is: '+computerScore)

}

document.getElementById('play game').onclick = playGame;