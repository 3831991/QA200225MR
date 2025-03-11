const students = ["יעקב", "אנה", "אווה", "אמיר", "לאריק", "ג'ניה", "אלישיב"];

function task1() {
    document.getElementById("output1").innerHTML = students.join(', ');
}

function task2() {
    document.getElementById("output2").innerHTML = students.join('<br>');
}

function task3() {
    document.getElementById("output3").innerHTML = [...students].sort().join('<br>');
}

function task4() {
    const i = +document.getElementById("index").value;
    document.getElementById("output4").innerHTML = students[i] || "לא קיים סטודנט!!!!";
}

function task5() {
    const rand = Math.floor(Math.random() * students.length);
    document.getElementById("output5").innerHTML = students[rand];
}