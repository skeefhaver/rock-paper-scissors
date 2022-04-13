const array = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let playerSelection = 0;

function computerPlay() {
    result = array[Math.floor(Math.random()*array.length)];
    return result;
}

function playRound(playerSelection, computerSelection) {
    let promptSelection = prompt('Enter your choice for rock paper scissors');
    playerSelection = promptSelection.toLowerCase();
    
    if (playerSelection == computerSelection) {
        console.log('The Round Is A Tie');
    } else {
        switch (playerSelection + computerSelection) {
            case 'rockscissors':
            case 'paperrock':
            case 'scissorspaper':
                console.log(`Player Wins Round. Score is Player: ${++playerScore} Computer: ${computerScore}`);
                return playerScore;
            case 'rockpaper':
            case 'paperscissors':
            case 'scissorsrock':
                console.log(`Computer Wins Round. Score is Player: ${playerScore} Computer: ${++computerScore}`);
                return computerScore;
        }
    }
}

function game() {
    let keepGoing = true;
    let bestOf = parseInt(prompt('Best of how many games?'));

    while (keepGoing) {
        computerPlay();
        let computerSelection = computerPlay();

        if (playerScore > (bestOf / 2)) {
            console.log('Congrats, you won the game!');
            keepGoing = false;
        } else if (computerScore > (bestOf / 2)) {
            console.log('You lost. The machines took over the world and it\'s all your fault!');
            keepGoing = false;            
        } else {
            (playRound(playerSelection, computerSelection))
        }
    }
}

function quickGame() {
    for (let i = 0; i < 5; i++) {
        computerPlay();
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore) {
        console.log('Congrats, you won the game');
    } else if (playerScore < computerScore) {
        console.log('You lost. The machines took over the world and it\'s all your fault!');
    } else {
        console.log('Game ended in a tie');
    }
}

quickGame();
