const names = ["אור", "אבינדב", "עטרה", "אליאב", "כלנית", "יורם", "משי", "רועי", "אחוה", "לבי", "כרמל", "סיגלית", "אביאל", "נדב", "יסמין", "יהודית", "בלה", "זיוה", "ימימה", "יהלום", "צביה", "איתיאל", "ליאורה", "אפרים", "הראל", "דרור", "זאב", "אביהו", "אופז", "טוהר", "אחיקם", "ליאל", "בני", "בן-אל", "מרים", "חנניה", "מיכל", "טלמור", "אשל", "אסף", "איריס", "אלדד", "אלישי", "שהם", "חמדה", "יואב", "ארי", "נח", "שי", "יוכבד"];

const numbers = [96, 73, 79, 81, 79, 57, 71, 63, 63, 79, 88, 77, 77, 66, 51, 50, 65, 62, 77, 95, 58, 80, 51, 52, 76, 100, 61, 56, 83, 55, 96, 86, 70, 85, 86, 99, 83, 78, 79, 69, 70, 62, 71, 88, 60, 65, 95, 78, 93, 94];

function showArrays() {
    document.getElementById('names').innerHTML = names.join(", ");
    document.getElementById('numbers').innerHTML = numbers.join(", ");
}

function task1() {
    let i = 0;
    const asterisk = [];

    while (i < 10) {
        asterisk.push("*");
        i++;
    }

    document.getElementById("output1").innerHTML = asterisk.join('  ');
}

function task2() {
    let i = 0;
    const asterisk = [];

    while (i < 10) {
        asterisk.push("*");
        i++;
    }

    document.getElementById("output2").innerHTML = asterisk.join('<br>');
}

function task3() {
    
}