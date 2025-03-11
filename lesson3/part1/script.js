function salerycalcultor() {
    let user = document.getElementById('user').value;
    let salery = +document.getElementById('salery').value;
    let newSalery = salery * 1.1;

    if (newSalery >= 6000) {
        newSalery = salery * 1.05;
    }

    document.getElementById("output1").innerHTML = `המשכורת החדשה של ${user} היא ${newSalery} ש"ח.`;
}

function check() {
    let age = +document.getElementById('age').value;
    let height = +document.getElementById('height').value;

    
}