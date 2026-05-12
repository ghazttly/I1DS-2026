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
    novoItem.innerHTML = `${id} - ${nome} - ${email} <p onClick=editar(${id}) class='btn' >Editar</p> <p onClick=excluir(${id}) class= 'btn'>Editar</p> - <p onClick=excluir(${id}) class='btn'>Excluir</p>`;

    //ADICIONAR O NOVO ITEM NA LISTA JA EXISTENTE
    lista.appendChild(novoItem);

    //LIMPAR OS CAMPOS
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";

    //FUNÇAO EDITAR
    const editar = (id) => {
        const lista = document.getElementById("lista");
        const item = document.querySelectorAll("li");
    
        itens.forEach= (item) => {
            let nome = item.innerHTML.split(" - ")[3];
            let email = item.innerHTML.split(" - ")[2];
    };

    //FUNÇAO EXCLUIR
    const excluir = (id) => {
        const lista = document.getElementById("lista");
        const item = document.querySelectorAll("li");

        itens.forEach((item) => {
            if (item.innerHTML.includes(id)) {
                item.remove();
            }
        }
    )};

}};

let produtos = [];
let totalGeral = 0;

const adicionarProduto = () => {
  let nome = document.getElementById("produto").value;
  let qtd = parseInt(document.getElementById("quantidade").value);
  let valor = parseFloat(document.getElementById("valor").value);

  if (!nome || !qtd || !valor) {
    alert("Preencha todos os campos");
    return;
  }
  let total = qtd * valor;
  produtos.push({
    nome,
    qtd,
    valor,
    total,
  });
  atualizarTabela();
  document.getElementById("produto").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("valor").value = "";
};

const atualizarTabela = () => {
  let tbody = document.querySelector("#tabelaProdutos tbody");
  tbody.innerHTML = "";
  produtos.forEach((item) => {
    tbody.innerHTML += `
      <tr>
        <td>${item.nome}</td>
        <td>${item.qtd}</td>
        <td>${item.valor.toFixed(2)}</td>
        <td>${item.total.toFixed(2)}</td>
      </tr>
    `;
  });
};
const finalizarCompra = () => {
  totalGeral = 0;
  produtos.forEach((item) => {
    totalGeral += item.total;
  });
  document.getElementById("total").innerText = totalGeral.toFixed(2);
  document.getElementById("valorLiquido").innerText = totalGeral.toFixed(2);
};

const aplicarDesconto = () => {
  let descontoValor =
    parseFloat(document.getElementById("descontoValor").value) || 0;

    let descontoPercentual =
    parseFloat(document.getElementById("descontoPercentual").value) || 0;
  let valorFinal = totalGeral;
  if (descontoValor > 0) {
    valorFinal -= descontoValor;
  }
  if (descontoPercentual > 0) {
    valorFinal -= totalGeral * (descontoPercentual / 100);
  }
  document.getElementById("valorLiquido").innerText = valorFinal.toFixed(2);
};