navigator.geolocation.getCurrentPosition(
function(posicao) {

    document.getElementById("LocalizacaoPermitida").style.display = "block";
    document.getElementById("LocalizacaoNegada").style.display = "none";

    document.getElementById("latitude").innerHTML =
        "Latitude: " + posicao.coords.latitude;

    document.getElementById("longitude").innerHTML =
        "Longitude: " + posicao.coords.longitude;

    document.getElementById("precisao").innerHTML =
        "Precisão: " + posicao.coords.accuracy + " metros";
},

function(erro) {

    document.getElementById("LocalizacaoPermitida").style.display = "none";
    document.getElementById("LocalizacaoNegada").style.display = "block";

    console.log("Não foi possível obter a localização.", erro);
});

navigator.mediaDevices.getUserMedia({
video: true, audio: true
})

.then(function(stream) {
const video = document.querySelector("#camera");
video.srcObject = stream;
})

.catch(function(erro) {
console.log("Erro ao acessar a câmera:", erro);

});

const video = document.querySelector("#camera");
const canvas = document.querySelector("#foto");
const botao = document.querySelector("#tirarFoto");

botao.addEventListener("click", function() {


const contexto = canvas.getContext("2d");

contexto.drawImage(
    video,
    0,
    0,
    canvas.width,
    canvas.height
);


});


