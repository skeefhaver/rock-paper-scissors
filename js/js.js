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

        if (playerScore > (bestOf / 2) || computerScore > (bestOf / 2)) {
            keepGoing = false;

        } else {
            (playRound(playerSelection, computerSelection))
        }
    }
}

game();

console.log(`Player score is ${playerScore}`);
console.log(`Computer score is ${computerScore}`);