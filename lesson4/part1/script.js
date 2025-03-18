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

}

function addLast() {

}
