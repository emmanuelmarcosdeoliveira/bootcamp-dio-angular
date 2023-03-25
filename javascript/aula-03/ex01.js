// 1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

// Média = (nota 1 + nota 2 + nota 3) / 3;

// Classificação:
// - Média menor que 5, reprovação;
// - Média entre 5 e 7, recuperação;
// - Média acima de 7, passou de semestre;

let nota1  = 2;
let nota2  = 3;
let nota3  = 8; 
const somadaMedia = (nota1+nota2+nota3)/3;
const MediaFinal  = somadaMedia;
console.log(`Suam Média Final foi: ${MediaFinal.toFixed(2)}`)

if(MediaFinal <= 5){
  console.log("Vocé está reprovado")
}else if (MediaFinal   <= 7){
console.log("Vocé esta de recuperação")
}else {
  console.log("Vocé esta aprovado")
}



