console.log("----------------------------------------------------------------------")
console.log("-----------------------------parte 1---------------------------------")
console.log("----------------------------------------------------------------------")

var nome = "Sérgio";
var idade = 54;
var cidade = "Venha-ver";
console.log("Olá,", nome, " você tem", idade, "anos e mora em", cidade);

console.log("---------------------------------------------");

var v1 = 17;
var v2 = 22;

console.log("Soma : v1 + v2 =", v1 + v2);
console.log("subtração : v1 - v2 =", v1 - v2);
console.log("multiplicação : v1 * v2 =", v1 * v2);
console.log("divisão : v1 / v2 =", v1 / v2);
console.log("resto divisão : v1 % v2 =", v1 % v2);

console.log("---------------------------------------------");

var lado1 = 9;
var lado2 = 5;

console.log("area de um retangulo 9 x 5 = ", lado1 * lado2);

console.log("---------------------------------------------");

var lado = 7;
var compr = 12;
var altura = 5;

console.log("volume de um paralelepipedo 7 x 12 x 5 = ", lado * compr * altura);

console.log("---------------------------------------------");

var product = 33
var desconto = 10/100
var valorFinal = product-(product * desconto)

console.log("desconto: ", valorFinal)

console.log("---------------------------------------------");
var celcius = 20;
var fahrenheit = celcius * 1.8 + 32;

console.log(celcius, "graus celcius é igual a", fahrenheit, "graus fahrenheit");
console.log(
  "-------------------------------------------------------------------------",
);

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
console.log(
  "-------------------------------------------------------------------------",
);

var nota = 7;
var nota2 = 7;
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
console.log(
  "---------------------------------------------------------------------------------",
);


var a = 1;
var b = -5;
var c = 6;

var delta = (b ** 2) - (4 * a * c);

console.log("O valor de Delta é: " + delta); 
console.log(
  "-------------------------------------------------------------------------",
);

var hora = 5;
var minutos = hora * 60;
var segundos = hora * 3600;

console.log(hora, "horas é igua á", minutos, "min");
console.log(hora, "horas é igua á", segundos, "seg");

console.log("----------------------------------------------------------------------")
console.log("-----------------------------parte 2---------------------------------")
console.log("----------------------------------------------------------------------")

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



console.log("----------------------------------------------------------------------")
console.log("-----------------------------parte 4---------------------------------")
console.log("----------------------------------------------------------------------")



console.log("----------------------------------------------------------------------")
console.log("-----------------------------parte 5---------------------------------")
console.log("----------------------------------------------------------------------")



console.log("----------------------------------------------------------------------")
console.log("-----------------------------parte 6---------------------------------")
console.log("----------------------------------------------------------------------")


