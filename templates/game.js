let btnRock = document.getElementById('btn0');
let btnPaper = document.getElementById('btn1');
let btnScissor = document.getElementById('btn2');
let resultDiv = document.getElementById('result');
let winnerSet = document.getElementById('winnerSet');
let userCounter = document.getElementById('counter-user');
let cpuCounter = document.getElementById('counter-cpu');
let winnerGame = document.getElementById('winGame');

btnRock.addEventListener('click', () => playGame(0));
btnPaper.addEventListener('click', () => playGame(1));
btnScissor.addEventListener('click', () => playGame(2));

let userScore = 0;
let cpuScore= 0;

function playGame(userChoice) {
    const choices = ['piedra', 'papel', 'tijeras'];
    const cpuChoice = Math.floor(Math.random() * 3);
    const cpuSelection = choices[cpuChoice];

    resultDiv.textContent = `CPU escoje ${cpuSelection}`;

    if (userChoice == cpuChoice) {
        winnerSet.textContent = 'empate';
    } else if ((userChoice == 0 && cpuChoice == 2) ||
               (userChoice == 1 && cpuChoice == 0) ||
               (userChoice == 2 && cpuChoice == 1)) {
        winnerSet.textContent = 'user gana';
        userScore++;
    } else {
        winnerSet.textContent = 'cpu gana';
        cpuScore++;
    }

    userCounter.textContent = `score user: ${userScore}`;
    cpuCounter.textContent = `score cpu: ${cpuScore}`;
    
    if (userScore == 3 || cpuScore == 3) {
       if (userScore > cpuScore) {
        winnerGame.textContent = 'user gana el juego';
       } else {
        winnerGame.textContent = 'cpu gana el juego'
    }

        userScore = 0;
        cpuScore = 0;
    }
}