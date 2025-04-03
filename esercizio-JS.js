//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il piÃ¹ grande tra due numeri interi.
*/

/*

let numero1 = parseInt(prompt("Inserisci un numero PER ESERCIZIO 1"));
let numero2 = parseInt(prompt("Inserisci un numero PER ESERCIZIO 1"));

if (numero1 > numero2) {
    console.log("ESERCIZIO 1 - il numero più grande è " + numero1);
} else if (numero1 < numero2) {
    console.log("ESERCIZIO 1 il numero più grande è " + numero2);
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"

let num = prompt("inserisci un numero PER ESERCIZIO 2");

if (num < 5) {
    console.log("ESERCIZIO 2 - Tiny");
} else if (num < 10) {
    console.log("ESERCIZIO 2 - Small");
} else if (num < 15) {
    console.log("ESERCIZIO 2 - Medium");
} else if (num < 20) {
    console.log("ESERCIZIO 2 - Large");
} else {
    console.log("ESERCIZIO 2 - Huge");
}

*/



//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/



for (let i = 0; i <= 10 ; i++) {
    if (i === 3 || i === 8) {
        continue;
    }
    console.log("ESERCIZIO 3 - " + i );
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

let pari = ""
let dispari = ""
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        pari += i + " ";
    } else {
        dispari += i + " ";
    }
} 
console.log("ESERCIZIO 11 - i numeri pari sono: " + pari);
console.log("ESERCIZIO 11 - i numeri dispari sono: " + dispari);

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numero1 = parseInt(prompt("Inserisci un numero PER ESERCIZIO EXTRA 1"));
let numero2 = parseInt(prompt("Inserisci un numero PER ESERCIZIO EXTRA 1"));
if (numero1 === 8 || numero2 === 8 || numero1 + numero2 === 8 || numero1 - numero2 === 8) {
    console.log("ESERCIZIO EXTRA 1 - uno dei numeri è 8 o la loro somma/sottrazione è uguale a 8");
}
else {
    console.log("ESERCIZIO EXTRA 1 - nessuna delle condizioni è vera");
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'Ã¨ una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 3
  Oggi Ã¨ il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia Ã¨ multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero Ã¨ multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/