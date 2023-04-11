const throwDice1 = document.getElementById('rollDice1');
const throwDice2 = document.getElementById('rollDice2');
const hold = document.getElementById('hold');
const dé = document.getElementById('déImg');
const newGameButton = document.getElementById('newGame');
let totalPlayer1 = document.getElementById('totalScorePlayer1')
let totalPlayer2 = document.getElementById('totalScorePlayer2')
let player1 = document.getElementById('currentScorePlayer1');
let player2 = document.getElementById('currentScorePlayer2');
let v = 0;
let w = 0;
let x = 0;
let y = 0;


const rollDice = () => {
    const numberDecimal = (Math.random() * 6) + 1;
    let number = Math.trunc(numberDecimal);

    if (number === 1) {
        dé.setAttribute("src", "Dé img/Dice-1.png")
        } else if (number === 2) {
        dé.setAttribute("src", "Dé img/Dice-2.png")
        } else if (number === 3) {
        dé.setAttribute("src", "Dé img/Dice-3.png")
        } else if (number === 4) {
        dé.setAttribute("src", "Dé img/Dice-4.png")
        } else if (number === 5) {
        dé.setAttribute("src", "Dé img/Dice-5.png")
        } else if (number === 6) {
        dé.setAttribute("src", "Dé img/Dice-6.png")
        }
    return number;
}

const RollDicePlayer1 = () => {
    rollDice();
    x += rollDice();
    if (rollDice() == 1) {
        x = 0;
    }
    player1.textContent = x;
}

const RollDicePlayer2 = () => {
    rollDice();
    y += rollDice();
    if (rollDice() == 1) {
        y = 0;
    }
    player2.textContent = y;
}

const Hold = () => {
    v = player1.textContent;
    w = player2.textContent;
    totalPlayer1.textContent -= v;
    totalPlayer2.textContent -= w;
    if ((totalPlayer1.textContent) <= (0 - 100)) {
            alert("Player1 Won the game !")
            totalPlayer1.textContent = 0;
            totalPlayer2.textContent = 0;
        }
    if ((totalPlayer2.textContent) <= (0 - 100)) {
            alert("Player2 Won the game !")
            totalPlayer1.textContent = 0;
            totalPlayer2.textContent = 0;
        }
    player1.textContent = 0;
    player2.textContent = 0;
    x = 0;
    y = 0;
}

const StartGame = () => {
    totalPlayer1.textContent = 0;
    totalPlayer2.textContent = 0;
    player1.textContent = 0;
    player2.textContent = 0;
}

newGameButton.addEventListener("click", StartGame);
throwDice1.addEventListener("click", RollDicePlayer1);
throwDice2.addEventListener("click", RollDicePlayer2);
hold.addEventListener("click", Hold);
