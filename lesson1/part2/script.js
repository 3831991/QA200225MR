function welcome() {
    alert("ברוכים הבאים");
}

function welcomeUser() {
    let userName = document.getElementById("name").value;

    alert("ברוך הבא " + userName);
}

function multi50() {
    let x = document.getElementById("num").value;

    alert(x * 50);
}

function multi() {
    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;

    alert(x * y);
}

function addition() {
    let n1 = +document.getElementById("num3").value;
    let n2 = +document.getElementById("num4").value;

    alert(n1 + n2);
}

function welcomeUser2() {
    let userName = document.getElementById("name2").value;

    document.getElementById("output").innerText = "שלום ל" + userName;
}