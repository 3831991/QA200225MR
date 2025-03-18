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
    let i = 1;
    const numbers = [];

    while (i <= 15) {
        numbers.push(i);
        i++;
    }

    document.getElementById("output3").innerHTML = numbers.join('<br>');
}

function task4() {
    document.getElementById("output4").innerHTML = names.slice(12, 33).join(', ');
}

function task5() {
    let i = 0;
    let max = numbers[0];

    while (i < numbers.length) {
        if (numbers[i] > max) {
            max = numbers[i];
        }

        i++;
    }

    document.getElementById("output5").innerHTML = max;
}

function task6() {
    let i = 0;
    let min = numbers[0];

    while (i < numbers.length) {
        if (numbers[i] < min) {
            min = numbers[i];
        }

        i++;
    }

    document.getElementById("output6").innerHTML = min;
}

function task7() {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    document.getElementById("output7").innerHTML = sum;
}

function task8() {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    document.getElementById("output8").innerHTML = sum / numbers.length;
}

function task9() {
    
}