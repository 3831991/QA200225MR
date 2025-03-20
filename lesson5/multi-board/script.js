function createMultiBoard() {
    const arr = [];

    for (let x = 1; x <= 10; x++) {
        for (let y = 1; y <= 10; y++) {
            arr.push(`<div>${x * y}</div>`);
        }
    }

    document.getElementById("board").innerHTML = arr.join("");
}