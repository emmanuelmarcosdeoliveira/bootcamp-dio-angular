// Main

(function()  {
  const peso = 115;
  const altura = 1.75;
  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc));
})();



function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return "Vocé está abaixo do peso";
  } else if (imc >= 18.5 && imc < 25.0) {
    return "Vocé está no peso Normal";
  } else if (imc >= 25 && imc < 30) {
    return "Vocé está Acima do peso";
  } else if (imc >= 30 && imc < 40) {
    return "Obeso";
  } else {
    return "Vocé está com Obsidade Grave";
  }
}
