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

    exibir() {
        const precoFinal = this.aplicarDesconto();

        return `
            <h2>Produto cadastrado</h2>
            <p><strong>Nome:</strong> ${this.nome}</p>
            <p><strong>Preço original:</strong> R$ ${this.preco.toFixed(2)}</p>
            <p><strong>Categoria:</strong> ${this.categoria}</p>
            <p><strong>Desconto:</strong> ${this.desconto}%</p>
            <p><strong>Preço com desconto:</strong> R$ ${precoFinal.toFixed(2)}</p>
        `;
    }
}


document.getElementById("formProduto").addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const preco = Number(document.getElementById("preco").value);
    const categoria = document.getElementById("categoria").value;
    const desconto = Number(document.getElementById("desconto").value);

    const produto = new Produto(nome,preco,categoria,desconto);
    produto.aplicarDesconto();
    localStorage.setItem("produto", JSON.stringify(produto));
    produto.exibir();

    document.getElementById("resultado").innerHTML = produto.exibir();

});
    const dados = localStorage.getItem("produto");
        if(dados){
            const produtoSalvar = JSON.parse(dados);

            const produto = new Produto(
                produtoSalvar.nome,
                produtoSalvar.preco,
                produtoSalvar.categoria,
                produtoSalvar.desconto

            );
            produto.exibir
        }