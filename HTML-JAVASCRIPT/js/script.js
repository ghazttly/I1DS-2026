//function olaMundo() {
    //alert("Olá Mundo!");

const olaMundo= () => {
    alert("Olá Mundo JS com arrow function!")
}

const mudarTexto = () =>{

    let elementoAlvo = document.getElementById("texto");
document.getElementById("texto").innerHTML = "Novo texto com JS";
document.getElementById("texto").style.color = "pink";
document.getElementById("texto").style.backgroundColor = "black";
};


const enviarNome = () =>{
    let nomeDigitado = document.getElementById("nome").value;
    alert("Olá " + nomeDigitado);

    //let nomeDigitado = document.getElementsByName("nome").value;
        //alert("Olá " + nomeDigitado);
}

const somar = () => {

    event.preventDefault();

    //buscou os elementos por id
    let numero1 = parseint(document.getElementById("n1").value);
    let numero2 = parseint(document.getElementById("n2").value);
    //realizou a soma dos valores
    let result = numero1 + numero2;
    //devolveu o resultado para o formulario
    document.getElementById("resultado").innerHTML = result;
}