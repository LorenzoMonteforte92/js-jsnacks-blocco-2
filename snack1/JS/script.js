// L'utente inserisce un numero nel prompt, se è pari stampa il numero,
// se è dispari stampa il numero successivo

// chiedere numero all'utente
userNumber = parseInt(prompt(`Inserisci un numero`));


// se è pari stampo il numero altrimenti stampo quello successivo
oddNext = userNumber + 1;
if(userNumber % 2 === 0){
    console.log(userNumber);
}else{
    console.log(oddNext);
}