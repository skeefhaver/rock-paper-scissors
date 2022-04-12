const array = ['rock', 'paper', 'scissors'];
let computerSelection = computerPlay();
let promptSelection = prompt('Enter your choice for rock paper scissors');
let playerSelection = promptSelection.toLowerCase();
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    result = array[Math.floor(Math.random()*array.length)];
    return result;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log('tie');
    } else {
        switch (playerSelection + computerSelection) {
            case 'rockscissors':
            case 'paperrock':
            case 'scissorspaper':
                console.log('Player Wins Round');
                return playerScore++;
            case 'rockpaper':
            case 'paperscissors':
            case 'scissorsrock':
                console.log('Computer Wins Round');
                return computerScore++;
        }
    }
}

playRound(playerSelection, computerSelection);

console.log(computerSelection);
console.log(`Player score is ${playerScore}`);
console.log(`Computer score is ${computerScore}`);