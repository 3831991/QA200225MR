function task1() {
    const rand = Math.random();
    const num = Math.floor(rand * 15) + 1;

    document.getElementById("output1").innerHTML = num;
}

function task2() {
    const rand = Math.random();
    const num = Math.floor(rand * 11) + 10;

    document.getElementById("output2").innerHTML += num + ', ';
}

function task3() {
    const rand = Math.random();
    const num = Math.floor(rand * 50) + 1;

    document.getElementById("output3").innerHTML = num;
}

function task4() {
    const num = +document.getElementById('num').value;
    const rand = Math.floor(Math.random() * num) + 1;

    document.getElementById("output4").innerHTML = rand;
}

function dice() {
    const rand = Math.random();
    const num = Math.floor(rand * 6) + 1;
    const d = document.getElementById("dice");

    if (num == 1) {
        d.innerHTML = '<span class="pip"></span>';
    } else if (num == 2) {
        d.innerHTML = `<span class="pip"></span>
                       <span class="pip"></span>`;
    } else if (num == 3) {
        d.innerHTML = `<span class="pip"></span>
                       <span class="pip"></span>
                       <span class="pip"></span>`;
    } else if (num == 4) {
        d.innerHTML = `<span class="pip"></span>
                       <span class="pip"></span>
                       <span class="pip"></span>
                       <span class="pip"></span>`;
    } else if (num == 5) {
        d.innerHTML = `<span class="pip"></span>
                       <span class="pip"></span>
                       <span class="pip"></span>
                       <span class="pip"></span>
                       <span class="pip"></span>`;
    } else if (num == 6) {
        d.innerHTML = `<span class="pip"></span>
                       <span class="pip"></span>
                       <span class="pip"></span>
                       <span class="pip"></span>
                       <span class="pip"></span>
                       <span class="pip"></span>`;
    }
}