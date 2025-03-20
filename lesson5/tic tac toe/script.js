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

    if (isPlayerX) {
        elem.innerHTML = 'X';
    } else {
        elem.innerHTML = 'O';
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