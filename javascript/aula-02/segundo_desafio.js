// Faça um programa para calular o valor de uma viagem

// Você tera 05 variáveis sendo elas 
//   1 - Preço do Etanol
//   2 - Preço da Gasolina
//   3 - O tipo de combustivel que está no seu carro. 
//   4 - Gasto médio de combustível por KM 
//   5 - Distância em KM da Viagem 

// Imprima no console o valor que será gasto para realizar esta viagem.


const precoEtanol  = 5.79;
const precoGasolina  = 6.66;
const gastoMedioporKm  = 10;
let distanciaViagem = 100;
const combustivel = "!Etanol";
const litrosConsumidos = distanciaViagem / gastoMedioporKm;  
if(combustivel === "Etanol"){
const comEtanol = litrosConsumidos * precoEtanol;
console.log(comEtanol.toFixed(2));
} else {
  const comGasolina = litrosConsumidos*precoGasolina;
  console.log(comGasolina.toFixed(2)); 
}


