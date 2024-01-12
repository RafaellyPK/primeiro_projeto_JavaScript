alert("Boas-vindas ao jogo do número secreto!");

let numeroMaximo = 100;

let numeroSecreto = Math.round(Math.random() * numeroMaximo + 1);

console.log(numeroSecreto);

let chute;

let tentativas = 1;

while(chute != numeroSecreto){

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}.`);

    if(numeroSecreto == chute) {

        break;

    } else {
    
        if(numeroSecreto > chute) {
            alert(`O número secreto é maior que: ${chute}`);
        } else{
            alert(`O número secreto é menor que: ${chute}`);
        }

        tentativas++;
    
    }
}

let palavaTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Isso aí! Você acertou o número secreto com ${tentativas} ${palavaTentativa};`);