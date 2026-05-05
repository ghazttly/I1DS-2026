//laço de repetição  -  FOR (PARA)
//o professor te colocou de castigo e pediu para você escrever mil vezes a frase
// "Eu vou prestar atenção às aulas e anotar tudo!"

//let i = 0 => primeiro utilizo uma variavel de controle
//i < 1000 => condição de repetição
//i++ => aumenta a variavel de controle para não travar e somar
for (let i = 0; i < 1000; i++) {
  //i++ == i = i+1
  console.log("Eu vou prestar atenção às aulas e anotar tudo!");
}

console.log("-----------------------------");

//escreva todos os numeros de 1 a 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

console.log("-----------------------------");

//escreva todos os numeros pares entre 1 a 20
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

//outra solução de numeros pares
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) console.log(i);
  //% => resto da divisão
  //i % 2 == 0 => se o resto da divisão de i por 2 for 0 ele mostra i
}
//----------------------------------------------------
console.log("-----------------------------");
//dado um vetor (array), calcule e exiba o somatório de seus elementos
var numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
let soma = 0;

console.log(numeros.length);
//numeros.length => mostra a quantidade de itens do array

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log(soma);

console.log("-----------------------------");

//LAÇO DE REPETIÇAO - WHILE / DO WHILE
//----------------------------------------------------
//WHILE TESTA A CONDIÇAO ANTES DE ENTRAR NO LAÇO DE REPETIÇAO
//SE A CONDIÇAO FOR INICIALMENTE FALSA, O LAÇO NAO É EXECUTADO NENHUMA VEZ


var x = 0;

while (x > 10) {
  console.log("Entrei no laço While...");
  x = 0;
}
console.log("Terminei!");
//----------------------------------------------------
console.log("-----------------------------");

//SOMAR ENQUANTO (WHILE) MENOR QUE 10
var somar = 0;    //VARIAVEL PARA ARMAZENAR A SOMA DOS NUMEROS
var num = 0;     //VARIAVEL PARA AUMENTAR DE 1 EM 1

while (num < 10) {
  somar += num;
  num++;
  console.log('Somando...',somar);
  console.log('Numero...',num);
}