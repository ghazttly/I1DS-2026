//CRIANDO FUNÇAO PARA FRASES ALEATORIAS
function falar() {
    //CRIANDO VETOR DE FRASES
    const frases = [
        "Hoje esta um dia bonito!",
        "Falta muito para sexta-feira?",
        "Qual o cardapio de hoje?",
        "Vish, tem prova de matematica.",
    ];
    //CRIANDO UMA VARIAVEL PARA ARMAZENAR A DIV COM ID "TAGARELA"
    let tagarela = document.getElementById("tagarela");

    //CRIANDO VARIAVEL DE CONTROLE PARA A FRASE EXIBIDA
    let controle = 0;

    //GERANDO NUMERO ALEATORIO ENTRE 0 E 1 (LE,BRANDO QUE O 1 NAO ENTRA NA CONTAGEM)
    let numero = Math.random();

    //OBTENDO O LIMITE DA FRASE A SER USADA
    if (numero > 0.75) controle = 3
    else if (numero > 0.5) controle = 2
    else if (numero > 0.25) controle = 1
}