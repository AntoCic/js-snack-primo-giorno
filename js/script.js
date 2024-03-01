// Esercizio 1
// Dichiara una variabile chiamata number e assegnale il valore 100. Stampa il valore della variabile in console.
const number = 100;
console.log(number);

// Esercizio 2
// Dichiara una costante chiamata PI e assegnale il valore di 3.14. Stampa il valore della costante in console.
// const PI = 3.14;
let PI = 3.14;
// ho cambiato la dichiarazione della variabile per l'esercizio successivo
console.log(PI);

// Esercizio 2/B
// Prova ad assegnare alla costante chiamata PI il valore di 3.1416. Sai dire cosa succede?
PI = 3.1416;
console.log(PI);

// Esercizio 2/C
// Dichiara una variabile chiamata radius e assegnale il valore 8.
// Moltiplica radius x 2 e x PI e assegna il valore a una variabile di nome circle.
// Stampa il valore della variabile circle in console.
const radius = 8;
const circle = radius * 2 * PI;
console.log(circle);

// Esercizio 3
// Dichiara una variabile chiamata name e
// assegnale il valore “Carlo”.
// Successivamente, modifica il valore della variabile in “Marco”.
// Stampa il nuovo valore in console.
let nome = "Carlo";
nome = "Marco";
console.log(nome);



// -----------------------------------------
const numberP = document.createElement("p");
numberP.textContent = number;
document.body.appendChild(numberP);

const piP = document.createElement("p");
piP.textContent = PI;
document.body.appendChild(piP);

const circleP = document.createElement("p");
circleP.textContent = circle;
document.body.appendChild(circleP);

const nomeP = document.createElement("p");
nomeP.textContent = nome;
document.body.appendChild(nomeP);