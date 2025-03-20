let isPlayerX = true;

function clickDiv(elem) {
    if (elem.innerHTML) {
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

function color(a, b, c) {
    a.style.backgroundColor = 'yellow';
    b.style.backgroundColor = 'yellow';
    c.style.backgroundColor = 'yellow';
}

function isEqual(a, b, c) {
    
}

function check() {
    const [d1, d2, d3, d4, d5, d6, d7, d8, d9] = document.querySelectorAll("#board div");

    if (d1.innerHTML == d2.innerHTML && d2.innerHTML == d3.innerHTML) {
        color(d1, d2, d3);
    } else if (d4.innerHTML == d5.innerHTML && d5.innerHTML == d6.innerHTML) {
        color(d4, d5, d6);
    } else if (d7.innerHTML == d8.innerHTML && d8.innerHTML == d9.innerHTML) {
        color(d7, d8, d9);
    } else if (d1.innerHTML == d4.innerHTML && d4.innerHTML == d7.innerHTML) {
        color(d1, d4, d7);
    } else if (d2.innerHTML == d5.innerHTML && d5.innerHTML == d8.innerHTML) {
        color(d2, d5, d8);
    } else if (d3.innerHTML == d6.innerHTML && d6.innerHTML == d9.innerHTML) {
        color(d3, d6, d9);
    } else if (d1.innerHTML == d5.innerHTML && d5.innerHTML == d9.innerHTML) {
        color(d1, d5, d9);
    } else if (d3.innerHTML == d5.innerHTML && d5.innerHTML == d7.innerHTML) {
        color(d3, d5, d7);
    }
}