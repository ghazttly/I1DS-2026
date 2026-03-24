// criando uma matriz
var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [6, 2, 8],
  [1, 3, 9],
];
console.table(matriz);

//obtendo elemento com base e seus indices

console.log(matriz[0][1]);
console.log(matriz[2][0]);
console.log(matriz[1][2]);

console.log("------------------------------------");
/*
1.crie uma matriz 3x3
2.imprima os valores da diagonal principal
3.altere os valores do item matriz[1][2] para 20 e matriz[2][0] para 30
*/

var matriz = [
  [7, 3, 0],
  [2, 8, 4],
  [5, 8, 3],
];

console.log(matriz[0][0]);
console.log(matriz[1][1]);
console.log(matriz[2][2]);
console.log("------------------------------------");
console.log(matriz[0][2]);
console.log(matriz[1][1]);
console.log(matriz[2][0]);
console.log("------------------------------------");
matriz[1][2] = 20;
matriz[2][0] = 30;

console.table(matriz);
