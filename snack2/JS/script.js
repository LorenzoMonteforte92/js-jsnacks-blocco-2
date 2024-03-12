// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga

//chiedere all'utente le due parole
userWordOne = prompt(`inserisci la prima parola`);
userWordTwo = prompt(`inserisci la seconda parola`);

//mettere a confronto le parole e stampare prima quella più corta poi quella lunga
if(userWordOne.length > userWordTwo.length ){
    console.log(userWordTwo);
    console.log(userWordOne);
} else{
    console.log(userWordOne);
    console.log(userWordTwo);
}