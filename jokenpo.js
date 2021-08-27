
/*Projeto 02 - Utilizando os conceitos aprendidos até estruturas de repetição, crie um
programa que jogue pedra, papel e tesoura (Jokenpô) com você.
*/

const prompt = require('prompt-sync')();

//Função para verificar quem ganhou
function jogar(){
    let jogador = prompt('Digite [0] - Pedra , [1] - Papel, [2] - Tesoura -->');
    let computador = Math.floor(Math.random()*3);

    let ponto_jogador = 0;
    let ponto_computador = 0;

    console.log(`Jogador: ${jogador}`);
    console.log(`Computador: ${computador}`);

    if (jogador == 0 && (computador ==1 || computador==2)){
        console.log('O jogador ganhou');
        ponto_jogador++;
    }else if (jogador ==1 && (computador ==0 || computador ==2)){
        console.log('O computador ganhou');
        ponto_computador++;
    }else if (jogador ==2 && computador == 0){
        console.log('O computador ganhou');
        ponto_computador++;
    }else if (jogador ==2 && computador ==1){
        console.log('O jogador ganhou');
        ponto_jogador++;
    }else if (jogador !=0 && jogador != 1 && jogador != 2){
         console.log('Opção inválida!');
         return;
    }

    acumula_jogador = acumula_jogador + ponto_jogador;
    acumula_computador = acumula_computador + ponto_computador;
}

let querjogar = 'S';
let jogardenovo = 'S';

let acumula_jogador = 0;
let acumula_computador = 0;

console.log("Vamos jogar Jokenpô!!\n");

while (querjogar == 'S'){
    if (jogardenovo=='S'){
        acumula_jogador = 0;
        acumula_computador = 0;

        let num_rodadas = parseInt(prompt('Quantas rodadas ? '));   
        
        for (let i = 1;  i<=num_rodadas; i++) {
            console.log(`\nRodada ${i}\n`);

            jogar();  //Função para verificar quem ganhou
        }  

        console.log();
        console.log(`O jogador ganhou -> ${acumula_jogador} rodada(s)`);
        console.log(`O computador ganhou -> ${acumula_computador} rodada(s)`);
        console.log();

        if (acumula_jogador == acumula_computador){
            console.log('<< O JOGO DEU EMPATE >>');
        }else if (acumula_jogador > acumula_computador){
            console.log('<< O JOGADOR GANHOU >>');
        }else if (acumula_computador > acumula_jogador){
            console.log('<< O COMPUTADOR GANHOU >>');
        }
    }   
    // Perguntando se quer jogar novamente
    console.log();
    jogardenovo = prompt('Quer jogar novamente ? (S/N) ');
    if (jogardenovo != 'S' && jogardenovo != 'N'){
        console.log('Resposta inválida. Digite S(Sim) ou N(Não)');
        jogardenovo = 'N';
    }else if (jogardenovo == 'N'){
        querjogar = 'N';
    }
}
