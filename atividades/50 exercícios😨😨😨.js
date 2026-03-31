console.log("----------------------------------------------------------------------")
console.log("-----------------------------parte 1---------------------------------")
console.log("----------------------------------------------------------------------")

//1
var nome = "Sérgio";
var idade = 54;
var cidade = "Venha-ver";
console.log("Olá,", nome, " você tem", idade, "anos e mora em", cidade);

console.log("---------------------------------------------");
//2
var v1 = 17;
var v2 = 22;

console.log("Soma : v1 + v2 =", v1 + v2);
console.log("subtração : v1 - v2 =", v1 - v2);
console.log("multiplicação : v1 * v2 =", v1 * v2);
console.log("divisão : v1 / v2 =", v1 / v2);
console.log("resto divisão : v1 % v2 =", v1 % v2);

console.log("---------------------------------------------");
//3
var lado1 = 9;
var lado2 = 5;

console.log("area de um retangulo 9 x 5 = ", lado1 * lado2);

console.log("---------------------------------------------");
//4
var lado = 7;
var compr = 12;
var altura = 5;

console.log("volume de um paralelepipedo 7 x 12 x 5 = ", lado * compr * altura);

console.log("---------------------------------------------");
//5
var product = 33
var desconto = 10/100
var valorFinal = product-(product * desconto)

console.log("desconto: ", valorFinal)

console.log("---------------------------------------------");
//6
var celcius = 27;
var fahrenheit = celcius * 1.8 + 32;

console.log(celcius, "graus celcius é igual a", fahrenheit, "graus fahrenheit");

console.log("---------------------------------------------");
//7
var altura = 1.75;
var peso = 65;
var imc = peso / (altura * altura);
console.log(
  "uma pessoa que mede",
  altura,
  "e pesa",
  peso,
  "kg tem o imc =",
  imc,
);
console.log("-------------------------------------------------------------------------",);
//8
var nota = 6;
var nota2 = 9;
var nota3 = 7;
var media = (nota + nota2 + nota3) / 3;
console.log(
  "a media final do aluno que tirou as notas",
  nota,
  nota2,
  nota3,
  "é de =",
  media,
);
console.log("---------------------------------------------------------------------------------",);
//9
var a = 4;
var b = 8;
var c = 10;

var delta = (b ** 2) - (4 * a * c);

console.log("O valor de Δ é: " + delta); 
console.log("-------------------------------------------------------------------------",);
//10
var hora = 6;
var minutos = hora * 60;
var segundos = hora * 3600;

console.log(hora, "horas é igua á", minutos, "min");
console.log(hora, "horas é igua á", segundos, "seg");

console.log("----------------------------------------------------------------------")
console.log("-----------------------------parte 2---------------------------------")
console.log("----------------------------------------------------------------------")
//11
var num1 = 0;
var num2 = 5;


if (num > 0) {
    console.log("Positivo");
} else if (num < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

if (num1 > 0) {
    console.log("Positivo");
} else if (num1 < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

if (num2 > 0) {
    console.log("Positivo");
} else if (num2 < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}
console.log("----------------------------------------------------------------------")
//12
var numero = 10;
var numero1 = 9;


if (numero % 2 === 0) {
    console.log(numero + " é Par");
} else {
    console.log(numero + " é Ímpar");
}

if (numero % 3 === 0) {
    console.log(numero1 + " é Par");
} else {
    console.log(numero1 + " é Ímpar");
}
console.log("----------------------------------------------------------------------")
//13
var num = 12;
var num1 = 4

if (num % 3 === 0) {
  console.log(num + " é múltiplo de 3.");
} else {
  console.log(num + " não é múltiplo de 3.");
}

if (num1 % 3 === 0) {
  console.log(num1 + " é múltiplo de 3.");
} else {
  console.log(num1 + " não é múltiplo de 3.");
}
console.log("----------------------------------------------------------------------")
//14
function recuperação(nota) {var frase;
  if (nota < 5) {
    frase = "reprovado";
  } else if (nota >= 5 && nota <= 6) {
    frase = "recuperação";
  } else {
    frase = "aprovado";
  }
  return frase;
}
var nota = 4;
console.log("nota:", nota, "-", recuperação(nota));
nota = 6;
console.log("nota:", nota, "-", recuperação(nota));
nota = 7;
console.log("nota:", nota, "-", recuperação(nota));
nota = 10;
console.log("nota:", nota, "-", recuperação(nota));

console.log("----------------------------------------------------------------------")
//15
function podeVotar(idade) {
  var frase;
  if (idade < 16) {
    frase = "Não pode Votar";
  } else if (idade >= 18 && idade <= 69) {
    frase = "Pode votar, e é obrigatório!";
  } else {
    frase = "Pode votar, mas é opcional!";
  }
  return frase;
}
var idade = 22;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 26;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 13;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 70;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 17;
console.log("Idade:", idade, "-", podeVotar(idade));

console.log("----------------------------------------------------------------------")
//16
var num = 25; 
var num1 = 79; 

if (num >= 10 && num <= 50) {
    console.log("O número está entre 10 e 50.");
} else {
    console.log("O número está fora do intervalo.");
}

if (num1 >= 10 && num1 <= 50) {
    console.log("O número está entre 10 e 50.");
} else {
    console.log("O número está fora do intervalo.");

}
console.log("----------------------------------------------------------------------")
//17
const login = "robson";
const senha = "819";

var loginUser = "adm";
var senhaUser = "1234";

if (loginUser == login && senhaUser == senha) {
  console.log("Login Realizado com Sucesso!");
}

if (loginUser == login && senhaUser == senha) {
  console.log("Acesso Permitido!");
} else {
  console.log("Acesso Negado!");
}

var loginUser = "robson";
var senhaUser = "819";

if (loginUser == login && senhaUser == senha) {
  console.log("Login Realizado com Sucesso!");
}

if (loginUser == login && senhaUser == senha) {
  console.log("Acesso Permitido!");
} else {
  console.log("Acesso Negado!");

}
console.log("----------------------------------------------------------------------")
//18
var x = 25;
var y = 15;
var maior;

if (x > y) {
    maior = x;
} else if (y > x) {
    maior = y;
} else {
    maior = "esse é o maior numero";
}

console.log("o maior numero é", maior);

console.log("----------------------------------------------------------------------")
//19
var a = 10, b = 35, c = 15;
var maior;

if (a >= b && a >= c) {
    maior = a;
} else if (b >= a && b >= c) {
    maior = b;
} else {
    maior = c;
}
console.log("O maior é: " + maior);

console.log("----------------------------------------------------------------------")
//20
function classificarIdade(idade) {
  if (idade < 12) {
    return "Criança";
  } else if (idade < 18) {
    return "Adolescente";
  } else if (idade < 60) {
    return "Adulto";
  } else {
    return "Idoso";
  }
}

console.log(classificarIdade(10));
console.log(classificarIdade(15)); 
console.log(classificarIdade(30)); 
console.log(classificarIdade(65)); 

console.log("----------------------------------------------------------------------")
console.log("-----------------------------parte 3---------------------------------")
console.log("----------------------------------------------------------------------")
//21
function obterDiaSemanaSwitch(numero) {
    switch (Number(numero)) {
        case 1: return "Domingo";
        case 2: return "Segunda-feira";
        case 3: return "Terça-feira";
        case 4: return "Quarta-feira";
        case 5: return "Quinta-feira";
        case 6: return "Sexta-feira";
        case 7: return "Sábado";
        default: return "Valor inválido";
    }
  }
console.log(obterDiaSemanaSwitch(5)); 
console.log(obterDiaSemanaSwitch(1)); 
console.log(obterDiaSemanaSwitch(3)); 
console.log(obterDiaSemanaSwitch(9)); 

console.log("----------------------------------------------------------------------")
//22
function obtermesano(numero) {
    switch (Number(numero)) {
        case 1: return "janeiro";
        case 2: return "fevereiro";
        case 3: return "março";
        case 4: return "abril";
        case 5: return "maio";
        case 6: return "junho";
        case 7: return "julho";
        case 8: return "Agosto";
        case 9: return "setembro";
        case 10: return "outubro";
        case 11: return "novembro";
        case 12: return "dezembro";
        default: return "Valor inválido";
      
    }
}
console.log(obtermesano(3)); 
console.log(obtermesano(6)); 
console.log(obtermesano(10)); 
console.log(obtermesano(8)); 
console.log(obtermesano(14)); 
console.log("----------------------------------------------------------------------")
//23
var mes = 11;




switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log("Primeiro trimestre!");
    break;


  case 4:
  case 5:
  case 6:
    console.log("Segundo trimestre!");
    break;
  
  case 7:
  case 8:
  case 9:
    console.log("Terceiro trimestre!");
    break;
  case 10:
  case 11:
  case 12:
    console.log("Quarto trimestre!");
    break;
  default:
    console.log("Mês incorreto!");
    break;
}

console.log("----------------------------------------------------------------------")
//24
var operacoes = "somar";
switch (operacoes) {
  case "somar":
    console.log("Você clicou no 'somar'");
    break;
  case "subtarir":
    console.log("Você clicou no 'subtarir'");
    break;
  case "multiplicar":
    console.log("Você clicou no 'multiplicar'");
    break;
  case "dividir":
    console.log("Você clicou no link 'dividir'");
    break;
}
console.log("----------------------------------------------------------------------")
//25
function avaliarDesempenho(nota) {
  
    var notaMaiuscula = nota.toUpperCase(); 
    var resultado;

    switch (notaMaiuscula) {
        case 'A':
            resultado = 'Excelente';
            break;
        case 'B':
            resultado = 'Bom';
            break;
        case 'C':
            resultado = 'Regular';
            break;
        case 'D':
            resultado = 'Ruim';
            break;
        default:
            resultado = 'Nota inválida';
    }
    return resultado;
}
console.log(avaliarDesempenho('A')); 
console.log(avaliarDesempenho('b')); 
console.log(avaliarDesempenho('C')); 
console.log(avaliarDesempenho('D')); 
console.log(avaliarDesempenho('E')); 
console.log("----------------------------------------------------------------------")
console.log("-----------------------------parte 4---------------------------------")
console.log("----------------------------------------------------------------------")
//26
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log("----------------------------------------------------------------------")
//27
for (let i = 100; i >= 1; i--) {
  console.log(i);
}

console.log("----------------------------------------------------------------------")
//28
for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}

console.log("----------------------------------------------------------------------")
//29
for (let i = 1; i <= 50; i += 2) {
  console.log(i);
}

console.log("----------------------------------------------------------------------")
//30
var soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log(soma);

console.log("----------------------------------------------------------------------")
//31
function calcularFatorial(num) {
  if (num === 0 || num === 1) return 1;

  var resultado = 1;
  for (let i = 2; i <= num; i++) {
    resultado *= i;
  }
  
  return resultado;
}
console.log(calcularFatorial(5));

console.log("----------------------------------------------------------------------")
//32
var numero = 9; 

console.log(`Tabuada do ${numero}:`);

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

console.log("----------------------------------------------------------------------")
//33
var contador = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    contador++;
  }
}
console.log("Quantidade de números pares entre 1 e 100:", contador);

console.log("----------------------------------------------------------------------")
//34
for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

console.log("----------------------------------------------------------------------")
//35
const linhas = 10;
var simbolo = '*';

for (let i = 1; i <= linhas; i++) {
    let linhaAtual = '';
    
    for (let j = 0; j < i; j++) {
        linhaAtual += simbolo + ' ';
    }
    
    console.log(linhaAtual);
}

console.log("----------------------------------------------------------------------")
console.log("-----------------------------parte 5---------------------------------")
console.log("----------------------------------------------------------------------")
//36
var numeros = [10, 5, 8, 25, 3, 17];

for (let i = 0; i < numeros.length; i++) {
  console.log(`Posição ${i}: ${numeros[i]}`);
}

console.log("----------------------------------------------------------------------")
//37
var soma 

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i]; 
}

console.log("A soma é:", soma); 

console.log("----------------------------------------------------------------------")
//38
var soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

var media = soma / numeros.length;

console.log("A média é:", media);

console.log("----------------------------------------------------------------------")
//39
var maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log(maior);

console.log("----------------------------------------------------------------------")
//40
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}

console.log(menor);

console.log("----------------------------------------------------------------------")
//41
let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Pares: ${pares}`);
console.log(`Ímpares: ${impares}`);

console.log("----------------------------------------------------------------------")
//42
for (let i = 0; i < numeros.length; i++) {
    numeros[i] = numeros[i] * 2;
}

console.log(numeros);

console.log("----------------------------------------------------------------------")
console.log("-----------------------------parte 6---------------------------------")
console.log("----------------------------------------------------------------------")
//43

var matriz = [];
for (let i = 0; i < 3; i++) {
    matriz[i] = []; // Cria a linha
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = 0;
    }
  }
var matriz = [
  [5, 12, 8],
  [15, 3, 20],
  [10, 7, 11]
];
console.table(matriz);

console.log("----------------------------------------------------------------------")
//44
console.log(matriz[0][0]);
console.log(matriz[1][1]);
console.log(matriz[2][2]);

console.log("----------------------------------------------------------------------")
//45
console.log(matriz[0][2]);
console.log(matriz[1][1]);
console.log(matriz[2][0]);

console.log("----------------------------------------------------------------------")
//46
var soma = 0;
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    soma += matriz[i][j];
  }
}
console.log("A soma é:", soma);

console.log("----------------------------------------------------------------------")
//47
const maiorValor = Math.max(...matriz.flat());

console.log(maiorValor);

console.log("----------------------------------------------------------------------")
//48
var x = 9
for (let i = 0; i < matriz.length; i++) {
    // Percorre as colunas de cada linha
    for (let j = 0; j < matriz[i].length; j++) {
        matriz[i][j] *= x;
    }
}
console.log(matriz);

console.log("----------------------------------------------------------------------")
//49
var contador = 0;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] > 10) {
      contador++;
    }
  }
}

console.log("Valores maiores que 10:", contador);

console.log("----------------------------------------------------------------------")
//50
console.table(matriz);