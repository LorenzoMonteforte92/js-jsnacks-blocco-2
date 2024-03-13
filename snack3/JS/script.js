// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

//creo array di numeri random
let num = [11, 9, 7, 14, 15, 1, 7, 13, 6, 2, 3, 13, 8, 7, 10, 12, 14, 8]

//creo ciclo che legge tutti gli elementi dell'array
for(let i = 0; i < num.length; i++){
    let thisNumber = num[i]
    //gi elementi pari li stampo in rosso
    let evenRed = document.querySelector(`#red-text`);
    let oddGreen = document.querySelector(`#green-text`)  
    if(num[i] % 2 === 0){
        evenRed.innerHTML += `<span>${num[i]} </span>`
        console.log(`numeri pari ${num[i]}`);
    } else if(num[i] % 2 !== 0){
        oddGreen.innerHTML += `<span>${num[i]} </span>`
    }
}