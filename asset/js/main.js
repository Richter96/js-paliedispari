
/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
 */

/* 
function sumTwoNumber (numb1, numb2 ) {
    alert (numb1 + numb2)
}


const userNumber = Number(prompt('inserisci un numero'))
const pcNumber = Math.floor(Math.random()* 5 + 1)

sumTwoNumber(userNumber, pcNumber)

 */

// creiamo una funzione che sommi 2 numeri
function sumNumber(numberUser) {
    // generiamo un numero random da uno a 5
    const randomN = Math.floor(Math.random() * 5 + 1)
    const sum = numberUser + randomN // function scope
    // consol.log(sum) // stampiamo un valore per controllo
    return sum// restituisce un valore
}

// definiamo variabile numerio utente.
const userNumber = Number(prompt('inserisci un numero'))

//diamo il valore alla funzoine 
const sumPcUser = sumNumber(userNumber)
console.log(sumPcUser)
