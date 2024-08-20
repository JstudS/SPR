import './index.html'
import './styles.css'
import scissors from './img/scissors.png'
import rock from './img/rock.png'
import paper from './img/paper.png'
import hand from './img/hand.png'

const SCISSOR = 'scissors';
const PAPER = 'paper';
const ROCK = 'rock';
const moves = ['scissors', 'paper', 'rock'];
const options = document.querySelectorAll('.game-options img');
const message = document.getElementById('message');
const playerOneImg = document.querySelector('.player-1-choice img');
const playerTwoImg = document.querySelector('.player-2-choice img');
const scoreFirst = document.querySelector('.score.first');
const scoreSecond = document.querySelector('.score.second');
let playerOneMove = ""
let playerTwoMove = "";
let scorePlayerOne = 0;
let scorePlayerTwo = 0;

function getRandomMove(){
    return moves[Math.floor(Math.random() * 3)];
}


function theRules(move){
    playerOneMove = move;
    playerTwoMove = getRandomMove();

    switch (move){

        case SCISSOR:
        if(playerOneMove == 'scissors' && playerTwoMove == 'rock'){
            playerTwoImg.src = rock;
            message.innerHTML = 'you lose!';

            scorePlayerTwo = scorePlayerTwo + 1;
        }
    
        if(playerOneMove == 'scissors' && playerTwoMove == 'scissors'){
            playerTwoImg.src = scissors;
            message.innerHTML = 'draw!';
        }
    
        if(playerOneMove == 'scissors' && playerTwoMove == 'paper'){
            playerTwoImg.src = paper;
            message.innerHTML = 'you win!';
            
            scorePlayerOne = scorePlayerOne + 1;
        }
        break;

        case ROCK:
        if(playerOneMove == 'rock' && playerTwoMove == 'paper'){
            playerTwoImg.src = paper;
            message.innerHTML = 'you lose!';

            scorePlayerTwo = scorePlayerTwo + 1;
        }

        if(playerOneMove == 'rock' && playerTwoMove == 'rock'){
            playerTwoImg.src = rock;
            message.innerHTML = 'draw!';
        }

        if(playerOneMove == 'rock' && playerTwoMove == 'scissors'){
            playerTwoImg.src = scissors;
            message.innerHTML = 'you win!';

            scorePlayerOne = scorePlayerOne + 1;
        }
        break;

        case PAPER:
        if(playerOneMove == 'paper' && playerTwoMove == 'paper'){
            playerTwoImg.src = paper;
            message.innerHTML = 'draw!';
        }

        if(playerOneMove == 'paper' && playerTwoMove == 'rock'){
            playerTwoImg.src = rock;
            message.innerHTML = 'you win!';

            scorePlayerOne = scorePlayerOne + 1;
        }

        if(playerOneMove == 'paper' && playerTwoMove == 'scissors'){
            playerTwoImg.src = scissors;
            message.innerHTML = 'you lose!';

            scorePlayerTwo = scorePlayerTwo + 1;
        }
        break;
    }

    
}

function restart(){
    setTimeout(() => {
        if(scorePlayerOne === 3){
            message.innerHTML = 'player one win!'
            scorePlayerOne = 0;
            scorePlayerTwo = 0;
            scoreFirst.innerHTML = `score: ${scorePlayerOne}`;
            scoreSecond.innerHTML = `score: ${scorePlayerTwo}`;
        }
        if(scorePlayerTwo === 3){
            message.innerHTML = 'player two win!'
            scorePlayerOne = 0;
            scorePlayerTwo = 0;
            scoreFirst.innerHTML = `score: ${scorePlayerOne}`;
            scoreSecond.innerHTML = `score: ${scorePlayerTwo}`;
        }
        setTimeout(() => {
            message.innerHTML = "start!";
            playerOneImg.src = hand;
            playerOneImg.classList.add('animate-1');
            playerTwoImg.src = hand;
            playerTwoImg.classList.add('animate-2');  
        },2000);
    }, 2000);
}

function playerOneChoise(choise){
    switch (choise) {

        case SCISSOR:
        playerOneImg.src = scissors;
        theRules(SCISSOR);
        playerOneImg.classList.remove('animate-1');
        playerTwoImg.classList.remove('animate-2');
        break;

        case ROCK:
        playerOneImg.src = rock;
        theRules(ROCK);
        playerOneImg.classList.remove('animate-1');
        playerTwoImg.classList.remove('animate-2');
        break;

        case PAPER:
        playerOneImg.src = paper;
        theRules(PAPER);
        playerOneImg.classList.remove('animate-1');
        playerTwoImg.classList.remove('animate-2');
        break;
    }
       
}

options.forEach(item => {
   
    item.addEventListener('click', (event) => {
        let choise = event.target.dataset.id;
        playerOneChoise(choise);
        scoreFirst.innerHTML = `score: ${scorePlayerOne}`;
        scoreSecond.innerHTML = `score: ${scorePlayerTwo}`;
        restart();
    })
})
 