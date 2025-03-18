const names = ["אור", "אבינדב", "עטרה", "אליאב", "כלנית", "יורם", "משי", "רועי", "אחוה", "לבי", "כרמל", "סיגלית", "אביאל", "נדב", "יסמין", "יהודית", "בלה", "זיוה", "ימימה", "יהלום", "צביה", "איתיאל", "ליאורה", "אפרים", "הראל", "דרור", "זאב", "אביהו", "אופז", "טוהר", "אחיקם", "ליאל", "בני", "בן-אל", "מרים", "חנניה", "מיכל", "טלמור", "אשל", "אסף", "איריס", "אלדד", "אלישי", "שהם", "חמדה", "יואב", "ארי", "נח", "שי", "יוכבד"];

function showNames() {
    document.getElementById('names').innerHTML = names.join(", ");
}

function asc() {
    names.sort();
    showNames();
}

function desc() {
    names.sort().reverse();
    showNames();
}

function removeLast() {
    names.pop();
    showNames();
}

function removeFirst() {
    names.shift();
    showNames();
}

function addFirst() {
    const name = document.getElementById("name1").value;
    names.unshift(name);
    showNames();
    document.getElementById("name1").value = "";
}

function addLast() {
    const name = document.getElementById("name2").value;
    names.push(name);
    showNames();
    document.getElementById("name2").value = "";
}

function search() {
    const name = document.getElementById("name3").value;
    const output = document.getElementById("output");

    const i = names.indexOf(name);

    if (i == -1) {
        output.innerHTML = "לא נמצא";
    } else {
        output.innerHTML = "נמצא במיקום: " + i;
    }
}