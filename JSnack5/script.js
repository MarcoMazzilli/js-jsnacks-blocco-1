
const listaNumeri = [];

for (let i = 0; i < 6; i++) {
  let numero = prompt("Scrivi un numero")
  
  if (!(numero % 2)) {
    console.warn("Numero pari")
  }else {
    listaNumeri.push(numero)
  }
}
console.log(listaNumeri)

const message = `I numeri dispari da te inseriti sono ${listaNumeri}`;
document.querySelector('h1').innerHTML = message;