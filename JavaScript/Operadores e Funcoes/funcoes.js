function saudacao(){
    console.log("Olá, JavaScript!");
}
saudacao();

function nome(nome){
    console.log("Olá," + nome);
}
nome("Ana");


function somar (a,b){
    return a+b;
}
console.log(somar(5,3));


let peso = 52
let alt = 1.60
function imc(peso,alt){
    return peso/(alt*alt);
}
console.log("Seu IMC é:" + imc(peso,alt));



let numero = 7;
function imparOuPar(num){
    if(numero % 2 === 0){
        return"par";
    }else{ "impar"
    }
}
console.log("O numero é", imparOuPar(numero));
