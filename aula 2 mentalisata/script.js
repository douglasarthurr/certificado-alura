//Deixar o projeto melhor usando o "numero secreto é menor que(numero escolhido)"
//Informar chutes que a pessoa fez
//Zero não apareca seja um numero entre 1 e 1000
//Quantas tentativas tem que ser feita para acertar

const secretNumber = parseInt(Math.random() * 1001);

let InputNumber = 0;

while (InputNumber != secretNumber){
    InputNumber = prompt("diz ai");

    if(InputNumber == secretNumber){
        alert("Acertou")
    }else if(InputNumber > secretNumber){
        alert("Errou! o numero secreto é menor")
    }else if(InputNumber < secretNumber){
        alert("Errou! o numero secreto é maior")
    }
}
