//operadores de incremento e decremento | pré e pós incremento
//incremeto => somar algo a uma variável
//decremento => subtrair algo de alguma variável

let idade = 16;
console.log(idade);

//idade = idade + 1; //somei 1 na idade
idade++;
console.log(idade);
console.log("-----------------------------");

//idade = idade + 1; //somei 1 na idade
idade--;
console.log(idade);
idade--;
console.log(idade);
console.log("-----------------------------");

let novaIdade = idade + 1;
console.log("idade:", idade, "| Nova idade:", novaIdade);

let novaidade = ++idade;
console.log("idade:", idade, "| Nova idade:", novaidade);
