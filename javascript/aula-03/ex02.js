// 2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

// Formula do IMC:
// IMC = peso / (altura * altura)

// Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

// IMC em adultos Condição:
// - Abaixo de 18.5 Abaixo do peso;
// - Entre 18.5 e 25 Peso normal;
// - Entre 25 e 30 Acima do peso;
// - Entre 30 e 40 Obeso;
// - Acima de 40 Obsesidade Grave;


let peso  = 115
let altura  = 1.75
const imc  = peso / Math.pow(altura, 2)

console.log(` Seu Valor de IMC é: ${imc.toFixed(2)}`)

if(imc <= 18.50){
  console.log(`Vocé está abaixo do peso` )
}else if ( imc <= 25.00){
  console.log(`Vocé está no peso Normal`)
}else if (imc <= 30){
  console.log(`Vocé está Acima do peso`)
}else {
  console.log(`Vocé está com Obsidade Grave`)
}



