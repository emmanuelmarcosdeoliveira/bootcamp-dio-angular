// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// - À vista Débito, recebe 10% de desconto;
// - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// - Em duas vezes, preço normal de etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

let precoEtiqueta = 125.00

const avistaDebito = 1;
const dinheiroPix = 2;
const duasvezes = 3;
const acimadeduas  = 4

let condicaodePagamento  = 2


if(condicaodePagamento === 1){
  console.log("Pagamento a Vista ou Débito")
  console.log(`O valor do seu pagamento ficou em  ${precoEtiqueta - (precoEtiqueta * 0.1)}`)
}else if (condicaodePagamento === 2){
  console.log("A vista no dinheiro ou Pix")
  console.log(`O valor do seu pagamento ficou em  ${precoEtiqueta - (precoEtiqueta * 0.15)}`)
}else if (condicaodePagamento === 3){
  console.log("Pagamento em 2x sem Juros")
  console.log(`O valor do seu pagamento é ${precoEtiqueta} `)
} else if (condicaodePagamento === 4){
    console.log("Pagamento Parcelado c/ juros")
    console.log(`O valor do seu pagamento ficou em R$  ${precoEtiqueta + (precoEtiqueta * 0.1)}`)
  } else if (condicaodePagamento < 1 || condicaodePagamento > 4){
    console.log("ERR0 ao processar a fomra de pagamento")
  }
