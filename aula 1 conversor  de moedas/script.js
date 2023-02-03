// Trocar a moeda para um criptomoerda
// Adicionar junto ao alert o nome da pessoa que esta pedindo o valor
// Converter duas unidades, anos luz em metros. alterar background e tornar um conversor interestrelar 

let valueToConvert = 30;
const dollarPrice = 5.32;

let convertedValue = valueToConvert * dollarPrice;
convertedValue = convertedValue.toFixed(2)
console.log('R$: '+ convertedValue);