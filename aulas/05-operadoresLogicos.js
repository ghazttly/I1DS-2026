//operadores lógicos
let souPobre = true;

console.log("Sou pobre?", souPobre);
console.log("Negação de souPobre:", !souPobre);

let manha = true;
let sono = true;
console.log("------------------------------------");
console.log("Manhã: ", manha, "| Estou com sono?", sono);

//comparador E (AND) e OU (OR)
console.log("operador AND (E): ", manha && sono);
console.log("operador OR (OU): ", manha || sono);

manha = false

console.log("------------------------------------");
console.log("Manhã: ", manha, "| Estou com sono?", sono);

//comparador E (AND) e OU (OR)
console.log("operador AND (E): ", manha && sono);
console.log("operador OR (OU): ", manha || sono);