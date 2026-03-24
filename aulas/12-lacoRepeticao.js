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
