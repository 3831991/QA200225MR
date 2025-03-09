function message() {
    alert("ברוכים הבאים לאתר שלנו!");
}

function message2() {
    let name = document.getElementById("name").value;
    alert("שלום " + name + " ברוך הבא לאתר שלנו!")
}

function multi50() {
    let n = document.getElementById("num").value;
    alert(n * 50);
}

function multi() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    alert(n1 * n2);
}

function sum() {
    let n1 = document.getElementById("num3").value;
    let n2 = document.getElementById("num4").value;
    alert(+n1 + +n2);
}

function message3() {
    let name = document.getElementById("username").value;
    document.getElementById("title").innerText = "שלום " + name + " ברוך הבא לאתר שלנו!";
}