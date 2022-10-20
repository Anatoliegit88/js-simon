// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

// generare 5 numeri random sulla pagina (da 1 a 50)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 1; i < 50; i--) {
  setTimeout(getRndInteger, 5000);
}
let count = 50;
// imediatamente dopo parte il timer di 30 secondi
let randomNumber = setTimeout(getRndInteger, 5000);
// quando i 30 secondi finiscono spariscono i numeri
if (count > 0) {
  randomNumber.innerHTML = count;
  count--;
}
// l'utente deve inserire un numero alla volta, di quelli precedentemente visti, tramite prompt
// dopo l'inserimento dei numeri, il software dira quali dei numeri sono stati individuati
// const rndNumber = 50;
// const gerateNumber = generateRandomNumbers(randomNumbers);
// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (50 - 1 + 1)) + 1;
//   console.log(getRndInteger);
// }
