class Produto {

    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        return this.preco - (this.preco * this.desconto / 100);
    }

    exibir(indice) {

        const precoFinal = this.aplicarDesconto();

        return `
            <div class="produto">

                <h2>Produto ${indice + 1}</h2>

                <p>
                    <strong>Nome:</strong> 
                    ${this.nome}
                </p>

                <p>
                    <strong>Preço original:</strong> 
                    R$ ${this.preco.toFixed(2)}
                </p>

                <p>
                    <strong>Categoria:</strong> 
                    ${this.categoria}
                </p>

                <p>
                    <strong>Desconto:</strong> 
                    ${this.desconto}%
                </p>

                <p>
                    <strong>Preço com desconto:</strong> 
                    R$ ${precoFinal.toFixed(2)}
                </p>

                <button onclick="editarProduto(${indice})">
                    Editar
                </button>

                <button onclick="excluirProduto(${indice})">
                    Excluir
                </button>

                <hr>

            </div>
        `;
    }
}


// Array que irá armazenar todos os produtos
const produtos = [];


// Formulário
document.getElementById("formProduto").addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const preco = Number(document.getElementById("preco").value);
    const categoria = document.getElementById("categoria").value;
    const desconto = Number(document.getElementById("desconto").value);


    // Cria um novo produto
    const produto = new Produto(
        nome,
        preco,
        categoria,
        desconto
    );


    // Adiciona o produto ao array
    produtos.push(produto);


    // Atualiza a lista
    mostrarProdutos();


    // Limpa o formulário
    document.getElementById("formProduto").reset();

});


// Função responsável por mostrar todos os produtos
function mostrarProdutos() {

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";


    // Percorre todos os produtos cadastrados
    produtos.forEach(function(produto, indice) {

        resultado.innerHTML += produto.exibir(indice);

    });

}


// Função para excluir um produto
function excluirProduto(indice) {

    produtos.splice(indice, 1);

    mostrarProdutos();

}


// Função para editar um produto
function editarProduto(indice) {

    const produto = produtos[indice];


    document.getElementById("nome").value = produto.nome;

    document.getElementById("preco").value = produto.preco;

    document.getElementById("categoria").value = produto.categoria;

    document.getElementById("desconto").value = produto.desconto;


    // Remove o produto antigo
    produtos.splice(indice, 1);

    mostrarProdutos();

}