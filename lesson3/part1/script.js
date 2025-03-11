function salerycalcultor() {
    let user = document.getElementById('user').value;
    let salery = +document.getElementById('salery').value;
    let newSalery = salery * 1.1;

    if (newSalery >= 6000) {
        newSalery = salery * 1.05;
    }

    document.getElementById("output1").innerHTML = `המשכורת החדשה של ${user} היא ${newSalery} ₪.`;
}

function check() {
    let age = +document.getElementById('age').value;
    let height = +document.getElementById('height').value;

    let isHeight = height >= 182;
    let isRange1 = age >= 14 && age <= 18;
    let isRange2 = age >= 21 && age <= 26;

    if (isHeight && (isRange1 || isRange2)) {
        document.getElementById("output2").innerHTML = "התקבל";
    } else {
        document.getElementById("output2").innerHTML = "לא התקבל";
    }
}