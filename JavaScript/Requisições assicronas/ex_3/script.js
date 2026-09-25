// URL da API que será consultada
const url = "https://dummyjson.com/products/category/mens-shirts";

// Pegando os elementos HTML
const botao = document.getElementById("btnConsultar");
const produtos = document.getElementById("produtos");
const mensagem = document.getElementById("mensagem");


// Função responsável por consultar a API
async function consultarProdutos() {

    try {

        // Mostra uma mensagem enquanto a consulta está acontecendo
        mensagem.textContent = "Carregando produtos...";

        // Faz a requisição para a API
        const resposta = await fetch(url);

        // Verifica se houve algum problema na resposta
        if (!resposta.ok) {
            throw new Error("Erro ao consultar a API.");
        }

        // Converte a resposta para JSON
        const dados = await resposta.json();

        // Limpa os produtos que estavam na tela
        produtos.innerHTML = "";

        // Percorre os produtos recebidos
        dados.products.forEach(function(produto) {

            // Cria um novo elemento div
            const card = document.createElement("div");

            // Adiciona a classe card
            card.classList.add("card");

            // Coloca as informações dentro do card
            card.innerHTML = `
                <img src="${produto.thumbnail}" alt="${produto.title}">

                <div class="card-conteudo">

                    <h3>${produto.title}</h3>

                    <p>Categoria: ${produto.category}</p>

                    <p class="preco">
                        US$ ${produto.price}
                    </p>

                </div>
            `;

            // Coloca o card dentro da seção de produtos
            produtos.appendChild(card);

        });

        // Mostra mensagem de sucesso
        mensagem.textContent = "Produtos carregados com sucesso!";

    }

    catch (erro) {

        // Mostra o erro para o usuário
        mensagem.textContent =
            "Não foi possível carregar os produtos.";

        console.error("Erro:", erro);
    }
}


// Quando o botão for clicado,
// chama a função consultarProdutos
botao.addEventListener("click", consultarProdutos);

// ==============================
// CONSULTA DE CEP
// ==============================

// Pegando os elementos do HTML
const campoCep = document.getElementById("cep");
const botaoCep = document.getElementById("btnCep");

const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");

const mensagemCep = document.getElementById("mensagemCep");


// Função para consultar o CEP
async function consultarCep() {

    // Retira espaços, pontos e traços do CEP
    const cep = campoCep.value.replace(/\D/g, "");

    // Verifica se o CEP possui 8 números
    if (cep.length !== 8) {

        mensagemCep.textContent =
            "Digite um CEP válido com 8 números.";

        return;
    }

    try {

        mensagemCep.textContent =
            "Consultando endereço...";

        // URL da API ViaCEP
        const urlCep =
            `https://viacep.com.br/ws/${cep}/json/`;

        // Faz a requisição
        const resposta = await fetch(urlCep);

        // Converte a resposta para JSON
        const dados = await resposta.json();

        // Verifica se o CEP existe
        if (dados.erro) {

            mensagemCep.textContent =
                "CEP não encontrado.";

            return;
        }

        // Preenche os campos com os dados da API
        rua.value = dados.logradouro;
        bairro.value = dados.bairro;
        cidade.value = dados.localidade;
        estado.value = dados.uf;

        mensagemCep.textContent =
            "Endereço encontrado com sucesso!";

    } catch (erro) {

        mensagemCep.textContent =
            "Erro ao consultar o CEP.";

        console.error("Erro:", erro);
    }
}


// Quando o botão for clicado
botaoCep.addEventListener("click", consultarCep);