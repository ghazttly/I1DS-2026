// CRIANDO UMA VARIAVEL PARA ARMAZENAR A DIV COM ID "LAMPADA"
let lampada = document.getElementById("lampada");

//CRIANDO FUNÇAO (ARROW FUNCTION) PARA TROCAR COR DE ACORDO COM O PARAMETRO
const acender = (cor) => {
    lampada.style.backgroundColor = cor;
}