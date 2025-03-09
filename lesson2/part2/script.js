function task1() {
    let city = document.getElementById("city").value;

    if (city == "קרית ארבע") {
        alert("נכון מאוד");
    } else {
        alert("לא נכון");
    }
}

function task2() {
    let n = +document.getElementById("num").value;

    if (n > 50) {
        document.getElementById("output").innerHTML = "המספר גדול מ-50";
    } else if (n < 30) {
        document.getElementById("output").innerHTML = "המספר קטן מ-30";
    } else {
        document.getElementById("output").innerHTML = "לא בטווח";
    }
}

function chnageColor() {
    let bg = document.getElementById("bgcolor").value;

    document.body.style.backgroundColor = bg;
}

function login() {
    let un = document.getElementById("userName").value;
    let pw = document.getElementById("password").value;

    if (un == "banana" && pw == "a123") {
        document.getElementById("output2").innerHTML = "ההתחברות בוצעה בהצלחה";
    } else {
        document.getElementById("output2").innerHTML = "שם משתמש או סיסמה שגויים";
    }
}

function check() {
    let n1 = +document.getElementById("num1").value;
    let n2 = +document.getElementById("num2").value;

    if (n1 == n2) {
        document.getElementById("output3").innerHTML = "המספרים שווים";
    } else {
        document.getElementById("output3").innerHTML = "המספרים לא שווים";
    }
}

function lastTask() {
    let n = +document.getElementById("num3").value;
    let out = document.getElementById("output4");
    
    if (n >= 40 && n <= 100) {
        out.innerHTML = "נכשל";
        out.style.color = "red";
    } else if (n >= 500 && n <= 600) {
        out.innerHTML = "בינוני";
        out.style.color = "orange";
    } else if (n >= 700 && n <= 900) {
        out.innerHTML = "טוב";
        out.style.color = "blue";
    } else if (n >= 980 && n <= 1000) {
        out.innerHTML = "מצויין";
        out.style.color = "green";
    } else {
        out.innerHTML = "Error";
        out.style.color = "";
    }
}