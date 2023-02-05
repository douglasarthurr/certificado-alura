// Trocar a moeda para um criptomoerda
// Adicionar junto ao alert o nome da pessoa que esta pedindo o valor
// Converter duas unidades, anos luz em metros. alterar background e tornar um conversor interestrelar 


let valueConvert = null;
let finalValue = null;

let input = document.getElementById("inputNumber")
let prints = document.getElementById("prints")


function selectOption(){

    let select = document.getElementById("coinToConvert")
    let optionValue = select.options[select.selectedIndex].value;

    let selectTwo = document.getElementById("coinConvert")
    let optionValueTwo = selectTwo.options[selectTwo.selectedIndex].value;

    if(optionValue === "brl"){
        // cotações moedas
        const dollarPrice = 5.15;
        const euroPrice = 5.58;
        const bitCoinPrice = 120777.77;

        if(optionValueTwo === "us"){
            valueConvert = input.value/dollarPrice
            finalValue = valueConvert.toFixed(2)
            console.log(finalValue)

        }else if(optionValueTwo === "eur"){
            valueConvert = input.value/euroPrice
            finalValue = valueConvert.toFixed(2)
            console.log(finalValue)

        }else if(optionValueTwo === "btc"){
            valueConvert = input.value/bitCoinPrice
            finalValue = valueConvert
            console.log(finalValue)
        }else{
            console.log("Não é possivel converter as mesmas moedas")
        };

    }else if(optionValue === "us"){
        const realPrice = 5.15;
        const euroPrice = 0.92;
        const bitCoinPrice = 23298.00;

        if(optionValueTwo === "brl"){
            valueConvert = input.value*realPrice
            finalValue = valueConvert.toFixed(2)
            prints.innerHTML = prints.innerHTML + ("<p class='valuePrint'>"+finalValue+"</p>")
            

        }else if(optionValueTwo === "eur"){
            valueConvert = input.value*euroPrice
            finalValue = valueConvert.toFixed(2)
            console.log(finalValue)

        }else if(optionValueTwo === "btc"){
            valueConvert = input.value/bitCoinPrice
            finalValue = valueConvert
            console.log(finalValue)
        }else{
            console.log("Não é possivel converter as mesmas moedas")
        };

    }else if(optionValue === "eur"){
        const dollarPrice = 1.08;
        const realPrice = 5.58;
        const bitCoinPrice = 21520.48;

        if(optionValueTwo === "us"){
            valueConvert = input.value/dollarPrice
            finalValue = valueConvert.toFixed(2)
            console.log(finalValue)

        }else if(optionValueTwo === "brl"){
            valueConvert = input.value*realPrice
            finalValue = valueConvert.toFixed(2)
            console.log(finalValue)

        }else if(optionValueTwo === "btc"){
            valueConvert = input.value/bitCoinPrice
            finalValue = valueConvert
            console.log(finalValue)
        }else{
            console.log("Não é possivel converter as mesmas moedas")
        };
    }else if(optionValue === "btc"){
        const dollarPrice = 23298.00;
        const realPrice = 120777.77;
        const euroPrice = 21520.48;

        if(optionValueTwo === "us"){
            valueConvert = input.value*dollarPrice
            finalValue = valueConvert
            console.log(finalValue)

        }else if(optionValueTwo === "brl"){
            valueConvert = input.value*realPrice
            finalValue = valueConvert
            console.log(finalValue)

        }else if(optionValueTwo === "eur"){
            valueConvert = input.value*euroPrice
            finalValue = valueConvert
            console.log(finalValue)
        }else{
            console.log("Não é possivel converter as mesmas moedas")
        };
    };
}

function buttonConvert(){
    selectOption()
}



