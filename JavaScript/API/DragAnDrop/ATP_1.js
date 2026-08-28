
let pecas = document.querySelectorAll(".peca");
let look = document.querySelector("#look");
let mensagem = document.querySelector("#mensagem");
let apagar = document.querySelector("#apagar");

let pecaAtual;


// Quando começa a arrastar
pecas.forEach(function(peca) {

    peca.addEventListener("dragstart", function() {
        pecaAtual = peca;
    });

});


// Permite soltar
look.addEventListener("dragover", function(event) {
    event.preventDefault();
});


// Quando soltar
look.addEventListener("drop", function(event) {

    event.preventDefault();

    look.innerHTML += 
        "<div class='item'>" + pecaAtual.innerText + "</div>";

    mensagem.innerText = "Peça adicionada ao look!";

    

});



