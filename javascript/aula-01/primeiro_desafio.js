/* - Faça um programa para calcular o valor de uma viagem.

Vocé terá 03 vairaiveis sendo elas.
1 - Preço do combustivel.
2 - Gasto médio de combustivel do carro por KM.
3- Distância em KM da Viagem. 
*/ 

const precoMedioCombustivel   = 5.79;
const mediaKmporlitro  = 10;
let distanciaEmKm  = 100;
const litrosConsumidos =  distanciaEmKm/mediaKmporlitro;
const valorGasto = litrosConsumidos * precoMedioCombustivel;
console.log(`O Valor da viagem ficou em R$${valorGasto} `); 

