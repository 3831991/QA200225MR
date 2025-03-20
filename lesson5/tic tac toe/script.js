// מערך של מערכים של מיקומים אפשריים לניצחון
const options = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let isPlayerX = true;
let isGameOver = false;

function clickDiv(elem) {
    if (elem.innerHTML || isGameOver) {
        return;
    }

    const turn = document.getElementById("turn");

    if (isPlayerX) {
        elem.innerHTML = 'X';
        turn.innerHTML = "התור של O";
    } else {
        elem.innerHTML = 'O';
        turn.innerHTML = "התור של X";
    }

    check();
    isPlayerX = !isPlayerX;
}

function check() {
    const divs = document.querySelectorAll("#board div");

    for (const op of options) {
        if (op.every(i => divs[i].innerHTML == 'X')) {
            op.forEach(i => {
                divs[i].style.backgroundColor = 'yellow';
            });

            isGameOver = true;
            alert("X is winner");
        } else if (op.every(i => divs[i].innerHTML == 'O')) {
            op.forEach(i => {
                divs[i].style.backgroundColor = 'yellow';
            });

            isGameOver = true;
            alert("O is winner");
        }
    }
}

function newGame() {
    if (!isGameOver && !confirm("האם להתחיל משחק חדש?")) {
        return;
    }

    isPlayerX = true;
    isGameOver = false;
    const divs = document.querySelectorAll("#board div");
    document.getElementById("turn").innerHTML = "התור של X";

    for (const div of divs) {
        div.innerHTML = '';
        div.style.backgroundColor = '';
    }
}