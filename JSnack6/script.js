// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

console.log(Math.pow(3, 3))
//Math.pow ci serve per ottenere la potenza di un numero [base*esponente]

//Chiedo all'utente 4 numeri e stampo il cubo di questi

const listaNumeri = [];

for (let i = 0; i < 4 ; i++) {

  const numeroInserito = prompt('Inserisci un numero');
  listaNumeri.push(numeroInserito);

  console.log(listaNumeri[i] ** 3)

}

const tHead = document.querySelector("thead")
const tBody = document.querySelector("tbody")

for (let c = 0; c < listaNumeri.length; c++) {
  const numero = listaNumeri[c];
  
  let th = document.createElement("th");
  th.style.fontSize = "5rem";
  th.innerHTML = `${numero}`
  tHead.append(th);

  // document.querySelector('h2').innerHTML += listaNumeri[c]**3 + " ";

  let td = document.createElement("td");
  td.style.fontSize = "3rem";
  td.innerHTML = `${numero**3}`
  tBody.append(td);
}