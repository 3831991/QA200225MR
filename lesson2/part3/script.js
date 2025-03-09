function plus() {
    let n1 = +document.getElementById("num1").value;
    let n2 = +document.getElementById("num2").value;

    document.getElementById("output1").innerHTML = n1 + n2;
}

function minus() {
    let n1 = +document.getElementById("num1").value;
    let n2 = +document.getElementById("num2").value;

    document.getElementById("output1").innerHTML = n1 - n2;
}

function multi() {
    let n1 = +document.getElementById("num1").value;
    let n2 = +document.getElementById("num2").value;

    document.getElementById("output1").innerHTML = n1 * n2;
}

function division() {
    let n1 = +document.getElementById("num1").value;
    let n2 = +document.getElementById("num2").value;

    document.getElementById("output1").innerHTML = n1 / n2;
}

function task2() {
    let n1 = +document.getElementById("num3").value;
    let n2 = +document.getElementById("num4").value;
    let op = document.getElementById("op").value;
    let output = document.getElementById("output2");

    if (op == "+") {
        output.innerHTML = n1 + n2;
    } else if (op == "-") {
        output.innerHTML = n1 - n2;
    } else if (op == "x") {
        output.innerHTML = n1 * n2;
    } else if (op == ":") {
        output.innerHTML = n1 / n2;
    }
}

function replace() {
    let num5 = document.getElementById("num5").value;
    let num6 = document.getElementById("num6").value;

    document.getElementById("num5").value = num6;
    document.getElementById("num6").value = num5;
}

let counter = 0;

function counterPlus() {
    document.getElementById("counter").innerHTML = ++counter;
    document.getElementById("counter").style.fontSize = (counter + 15) + 'px';
}

function counterMinus() {
    document.getElementById("counter").innerHTML = --counter;
    document.getElementById("counter").style.fontSize = (counter + 15) + 'px';
}
