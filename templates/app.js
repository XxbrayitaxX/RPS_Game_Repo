let btnRock = document.getElementById('btn0');
let btnPaper = document.getElementById('btn1');
let btnScissor = document.getElementById('btn2');

btnRock.addEventListener('click', () => playGame(0));
btnPaper.addEventListener('click', () => playGame(1));
btnScissor.addEventListener('click', () => playGame(2));

let userScore = 0;
let cpuScore = 0;

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const cpuChoice = Math.floor(Math.random() * 3);
    const cpuSelection = choices[cpuChoice];

    console.log(`User chose ${choices[userChoice]}. CPU chose ${cpuSelection}.`);

    if (userChoice === cpuChoice) {
        console.log("It's a tie!");
    } else if ((userChoice === 0 && cpuChoice === 2) ||
               (userChoice === 1 && cpuChoice === 0) ||
               (userChoice === 2 && cpuChoice === 1)) {
        console.log("User wins!");
        userScore++;
    } else {
        console.log("CPU wins!");
        cpuScore++;
    }

    console.log(`Score - User: ${userScore}, CPU: ${cpuScore}`);

    if (userScore === 3 || cpuScore === 3) {
        if (userScore > cpuScore) {
            console.log("User wins the game!");
        } else {
            console.log("CPU wins the game!");
        }
        // Reiniciar el puntaje para un nuevo juego
        userScore = 0;
        cpuScore = 0;
    }
}
