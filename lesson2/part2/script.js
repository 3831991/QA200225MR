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
        
    } else {

    }
}