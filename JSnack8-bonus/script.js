/*
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. 
*/

const numero = prompt("fornisci un numero a quattro cifre");
console.log(numero);

let n1 = parseInt(numero.slice(0,1))
let n2 = parseInt(numero.slice(1,2))
let n3 = parseInt(numero.slice(2,3))
let n4 = parseInt(numero.slice(3,4))

console.log(n1 , n2 , n3 , n4)

const somma = n1 + n2 + n3 + n4;

document.querySelector("h1").append(somma);