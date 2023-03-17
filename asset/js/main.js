
/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
 */


// chiedere all'utente se dispari o pari

const sceltaUser = cicloparidispari()


// chiedere all'utente un numero da 1-5
let numbUser = (Number(prompt('scegli un numero da uno a cinque')))
const sceltaNumeroUser = cicloNumbUser_1_5(numbUser)


// genero un numero random da 1-5

const pcNumber = getRndInteger(1, 5)
console.log(pcNumber);
// sommiamo i 2 numeri 

const risultato = sum_pc_user_pari_dispari(pcNumber, numbUser)



// dichiariamo il vincitore
// se risultato è uguale a dispPar allora User is winner
if (risultato == sceltaUser) {
    console.log('utente è il vincitore')
} else {
    console.log('pc è il vincitore')
}



// ---------------------------------------funzoni

function cicloNumbUser_1_5(numbUser) {
    while (numbUser > 5 || numbUser < 1) {
        alert('seleziona un numero da uno a cinque')
        numbUser = Number(prompt('scegli un numero da uno a cinque'))
    }
}

function cicloparidispari() {
    let dispPari = prompt('scegli se dispari o pari')
    while (dispPari != 'pari' && dispPari != 'dispari') {
        alert('seleziona dispari o pari')
        dispPari = prompt('scegli se dispari o pari')
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function sum_pc_user_pari_dispari(pcNumber, numbUser) {
    const TotPcUser = pcNumber + numbUser
    console.log(TotPcUser)

    let risultato;
    // se il totoale delle somme è pari o dispari
    if (TotPcUser % 2 == 0) {
        risultato = 'pari'
    } else {
        risultato = 'dispari'
    }

    return risultato
}



















/* 
---------------------------------------------Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */
/* 
// prompt chiedi una parola (MIA SOLUZIONE)
const parola_1 = prompt('dichiara una parola')


// scrivila al contrario
const p_Inversa = reverseString(parola_1) 
console.log(p_Inversa);




// confrontala con la parola inserita è uguale alla parola al contrario

if (parola_1 == p_Inversa) {
    console.log('la parola è un palindromo')
} else {
    console.log('la parola non è un palindromo')  
} 


//------------------------------------ funzioni

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = ""
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); 
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); 
    
    //Step 4. Return the reversed string
    return joinArray;
} */




//chiedere all'utente di inserire una parola (SOLUZIONE ALTERNATIVA)

const word = 'otto'

/* // creiamo una funzione per capire se la parola inserita è un palindroma
// [split] prendo la parola e per ogni lettera creo un elemento dell'arrey
const splittedWord = word.split('')

        // [reverse]
const reverseArray = splittedWord.reverse()
console.log(reverseArray)

        // [join] unisco i caratteri dell'arrei rovesciata per formare di nuovo la parola
const reverseWord = reverseArray.join('')

        // verifico che la parola sia un palindromo o meo 
if (word === reverseWord) {
    console.log(`${word} è un palindromo`)
} else {
    console.log(`${word} non è un palindromo`)
} */


function is_palindromo(word) {
    const reverse_word = word.split('').reverse().join('')
    if (word === reverseWord) {
        return true
    } else {
        return false
    }
}

if (is_palindromo) {
    console.log(`${word} è un palindromo`)
} else {
    console.log(`${word} non è un palindromo`)
}



