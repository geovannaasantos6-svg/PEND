navigator.geolocation.getCurrentPosition(
    function(posicao){
        document.getElementById("LocalizacaoPermitida").style.display = "block";
        document.getElementById("LocalizacaoNegada").style.display = "nome"

        console.log("Latitude:", posicao.coords.latitude);
        console.log("Longitude:", posicao.coords.longitude);
        console.log("Precisão:", posicao.coords.accuracy);
    },
    function(erro){
        document.getElementById("LocalizacaoPermitida").style.display = "none";
        document.getElementById("LocalizacaoNegada").style.display = "block"

        console.log("Não foi possivel obter a localização.", erro);
    },
);