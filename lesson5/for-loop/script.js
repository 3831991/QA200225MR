const names = ["אור", "אבינדב", "עטרה", "אליאב", "כלנית", "יורם", "משי", "רועי", "אחוה", "לבי", "כרמל", "סיגלית", "אביאל", "נדב", "יסמין", "יהודית", "בלה", "זיוה", "ימימה", "יהלום", "צביה", "איתיאל", "ליאורה", "אפרים", "הראל", "דרור", "זאב", "אביהו", "אופז", "טוהר", "אחיקם", "ליאל", "בני", "בן-אל", "מרים", "חנניה", "מיכל", "טלמור", "אשל", "אסף", "איריס", "אלדד", "אלישי", "שהם", "חמדה", "יואב", "ארי", "נח", "שי", "יוכבד"];

const numbers = [96, 73, 79, 81, 79, 57, 71, 63, 63, 79, 88, 77, 77, 66, 51, 50, 65, 62, 77, 95, 58, 80, 51, 52, 76, 100, 61, 56, 83, 55, 96, 86, 70, 85, 86, 99, 83, 78, 79, 69, 70, 62, 71, 88, 60, 65, 95, 78, 93, 94];

function showArrays() {
    document.getElementById('names').innerHTML = names.join(", ");
    document.getElementById('numbers').innerHTML = numbers.join(", ");
}

function task1() {
    const arr = [];

    for (let i = 0; i < 10; i++) {
        arr.push("*");
    }

    document.getElementById("output1").innerHTML = arr.join(' ');
}

function task2() {
    const arr = [];

    for (let i = 0; i < 10; i++) {
        arr.push("*");
    }

    document.getElementById("output2").innerHTML = arr.join('<br>');
}

function task3() {
    const arr = [];

    for (let i = 1; i <= 15; i++) {
        arr.push(i);
    }

    document.getElementById("output3").innerHTML = arr.join(' | ');
}

function task4() {
    const arr = [];

    for (let i = 12; i <= 32; i++) {
        arr.push(`<small><b>${i}</b>.</small> ${names[i]}.`);
    }

    document.getElementById("output4").innerHTML = arr.join('<br>');
}

function task5() {
    document.getElementById("output5").innerHTML = Math.max(...numbers);
}

function task6() {
    document.getElementById("output6").innerHTML = Math.min(...numbers);
}

function task7() {
    let sum = 0;

    for (const x of numbers) {
        sum += x;
    }

    document.getElementById("output7").innerHTML = sum;
}

function task8() {
    let sum = 0;

    for (const x of numbers) {
        sum += x;
    }

    document.getElementById("output8").innerHTML = sum / numbers.length;
}

function task9() {
    const arr = [];

    for (let i = 1; i <= 15; i++) {
        arr.push(`<span style="font-size: ${16 + i * 4}px;">${i}</span>`);
    }

    document.getElementById("output9").innerHTML = arr.join(" | ");
}

function task10() {
    const arr = [];

    for (let i = 1; i <= 30; i++) {
        if (i % 2 == 0) {
            arr.push(i);
        }
    }

    document.getElementById("output10").innerHTML = arr.join(" | ");
}

function task11() {
    const arr = [];

    for (const num of numbers) {
        if (num % 2 == 0) {
            arr.push(num);
        }
    }

    document.getElementById("output11").innerHTML = arr.join(" | ");
}

function task12() {
    const arr = [];

    for (let row = 1; row <= 10; row++) {
        let asterisk = '';

        for (let i = 0; i < row; i++) {
            asterisk += '*';
        }
        
        arr.push(asterisk);
    }

    document.getElementById("output12").innerHTML = arr.join('<br>');
}
