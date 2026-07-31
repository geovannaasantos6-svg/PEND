const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    let mensagem = document.getElementById("mensagem");

    if(nome == "" || email == ""){

        mensagem.style.color = "red";
        mensagem.innerHTML = "Preencha todos os campos.";

    }else{

        mensagem.style.color = "green";
        mensagem.innerHTML = "Obrigado pelo contato, " + nome + "! Em breve retornarei para o e-mail " + email + ".";

        formulario.reset();

    }

});