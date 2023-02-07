//Deixar o projeto melhor usando o "numero secreto é menor que(numero escolhido)"
//Informar chutes que a pessoa fez
//Zero não apareca seja um numero entre 1 e 1000
//Quantas tentativas tem que ser feita para acertar

this.secretNumber = Math.floor(Math.random() * 1000) + 1;
const InputNumber = document.getElementById("inputNumber");
const textNumber = document.getElementById("textNumber")
const buttonStart = document.getElementById("buttonStart");
const kicks = document.getElementById("kicks");
let numberKicks = 0;


function start(){
    InputNumber.removeAttribute("disabled");
    buttonStart.removeAttribute("onclick");
    buttonStart.setAttribute("onclick", "buttonKicks()");
    buttonStart.textContent = "chutar";
    pairOrOdd();
}

function buttonKicks(){
    numberKicks++;
    kicks.textContent = "Chutes: " + numberKicks;
    buttonStart.textContent = "chutar";
    number = InputNumber.value;
    if(number > 1000 || number <= 0 || (isNaN(number))){
        InputNumber.value = null;
        InputNumber.setAttribute("disabled", "disabled");
        textNumber.textContent = "Número inválido, jogue novamente";
        buttonStart.removeAttribute("onclick");
        buttonStart.setAttribute("onclick", "start()");
        buttonStart.textContent = "começar";
        numberKicks = 0;
        kicks.textContent = "Chutes: " + numberKicks;

    }else if(number < this.secretNumber){
        textNumber.textContent = "Errou! o numero secreto é maior";
        
    }else if(number > this.secretNumber){
        textNumber.textContent = "Errou! o numero secreto é menor";
        
    }else if(number == secretNumber){
        textNumber.textContent = "Parabéns você acertou o número " + secretNumber;
        InputNumber.setAttribute("disabled", "disabled")
        buttonStart.removeAttribute("onclick")
        buttonStart.setAttribute("onclick", "restart()")
        buttonStart.textContent = "recomeçar";
    }
}

function pairOrOdd(){
    if(this.secretNumber%2 === 0){
        textNumber.textContent = "Número secreto é par";
    }else{
        textNumber.textContent = "Número secreto é impar";
    };
};

function restart(){
    this.secretNumber = Math.floor(Math.random() * 1000) + 1;
    InputNumber.value = null;
    buttonStart.removeAttribute("onclick");
    buttonStart.setAttribute("onclick", "start()");
    textNumber.textContent = "Digite um número de 1 a 1000";
    numberKicks = 0;
    kicks.textContent = "Chutes: " + numberKicks;
    start();
}
