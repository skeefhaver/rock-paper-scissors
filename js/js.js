const array = ['rock', 'paper', 'scissors'];

function computerPlay() {
    result = array[Math.floor(Math.random()*array.length)];
    return result;
}

console.log(computerPlay());