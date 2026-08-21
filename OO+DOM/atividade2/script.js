class Produto {

    constructor(nome, preco, categoria, desconto) {

        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;

    }


    calcularDesconto() {

        const valorDesconto = this.preco * this.desconto / 100;

        return this.preco - valorDesconto;

    }
}

// Recupera os produtos do localStorage
let produtos = JSON.parse(localStorage.getItem("produtos"));


// Se não existir nenhum produto
if (produtos == null) {
    produtos = [];
}
// Pega o formulário
const form = document.getElementById("formProduto");


// Quando o formulário for enviado
form.addEventListener("submit", function(event) {

    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const preco = Number( document.getElementById("preco").value);
    const categoria = document.getElementById("categoria").value;
    const desconto = Number(document.getElementById("desconto").value);
    const produto = new Produto(nome,preco,categoria,desconto);


    // Adiciona o produto ao array
    produtos.push(produto);
    salvarProdutos();
    mostrarProdutos();
    form.reset();

});


// Salva os produtos no localStorage
function salvarProdutos() {

    localStorage.setItem("produtos",JSON.stringify(produtos));

}

function mostrarProdutos() {

    const resultado = document.getElementById("resultado");


    resultado.innerHTML = "";


    for (let i = 0; i < produtos.length; i++) {

        const produto = produtos[i];


        const precoFinal = produto.preco - (produto.preco * produto.desconto / 100);


        resultado.innerHTML += `

            <div>

                <h3>Produto ${i + 1}</h3>

                <p>Nome: ${produto.nome}</p>

                <p>Preço: R$ ${produto.preco}</p>

                <p>Categoria: ${produto.categoria}</p>

                <p>Desconto: ${produto.desconto}%</p>

                <p>
                    Preço com desconto:
                    R$ ${precoFinal}
                </p>

                <button onclick="excluirProduto(${i})">
                    Excluir
                </button>

                <hr>

            </div>

        `;

    }

}


// Exclui um produto
function excluirProduto(indice) {

    produtos.splice(indice, 1);

    salvarProdutos();

    mostrarProdutos();

}


// Mostra os produtos ao abrir a página
mostrarProdutos();