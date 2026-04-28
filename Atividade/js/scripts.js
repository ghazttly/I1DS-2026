let userCount = 0;

const cadastrar = (event) => {
    //PARAR A PROPAGÇAO PADRAO DO EVENTO
    event.preventDefault();

    //CAPTURAR OS VALORES DOS ELEMENTOS POR ID
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    //CAPTURANDO O ELEMENTO DE LISTA POR ID
    let lista = document.getElementById("lista");

    userCount++;
    let id = userCount

    //CRIAR UM NOVO ELEMENTO <LI>NOME - EMAIL</LI>
    let novoItem = document.createElement("li");
    novoItem.innerHTML = `${id} - ${nome} - ${email} <p onClick=editar(${id}) class='btn' >Editar</p> <p onClick=excluir(${id})

    //ADICIONAR O NOVO ITEM NA LISTA JA EXISTENTE
    lista.appendChild(novoItem);

    //LIMPAR OS CAMPOS
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";

    const editar = (id) => {
        //buscar o conteudo do id na lista
        //preencher os campos do formulário com os valores
    };

    const excluir = (id) => {
        //buscar o conteudo do id na lista
        //remover o item
        const lista = document.getElementById("lista");
        const item = document.getElementsByTagName("li");

        itens.forEach((item) => {
            if 9item.innerHTML.includes(id)) {
                item.remove();
            }
        }
    });

}