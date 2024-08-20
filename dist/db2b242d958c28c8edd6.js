


const SCISSOR = 'scissors', PAPER = 'paper', ROCK = 'rock';
const moves = ['scissors', 'paper', 'rock'];
const options = document.querySelectorAll('.game-options img');
const message = document.getElementById('message');
const playerOneImg = document.querySelector('.player-1-choice img');
const playerTwoImg = document.querySelector('.player-2-choice img');

let playerOneMove = "", playerTwoMove = "1";

function getRandomMove(){
    return moves[Math.floor(Math.random() * 3)];
}

function playerOneChoise(choise){
    switch (choise) {
        case 'scissors':
        let choiseImg = document.createElement('img');
        choiseImg.setAttribute('src', './img/scissors.png'); 
        playerOneImg.replaceWith(choiseImg);
        break;
    }
}

options.forEach(item => {
    item.addEventListener('click', (event) => {
        let choise = event.target.dataset.id;
        playerOneChoise(choise);
    })
})
console.log(playerOneImg);