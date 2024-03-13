// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

let userNumber = prompt(`scegli un numero di 4 cifre`);

let sum = 0;
for(let i = 0; i < userNumber.length; i++){
    let thisNumber = parseInt(userNumber[i]);
    sum += thisNumber;
}

console.log(sum);
