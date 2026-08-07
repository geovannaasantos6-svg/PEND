//obejetos
//atributos
//metodos
 class Casa{

        //construtor executado automaticamente quando criamos um novo objeto
        constructor(numero, quarto, cor, banheiro){

            //Aquele Atributo pertence ao objeto 
            this.numero = numero;
            this.quarto = quarto;
            this.cor = cor;
            this.banheiro = banheiro;
        } 
        comprar(){
            console.log(`${this.cor} comprar`);
        }
        //

        alugar(){
            console.log(`${this.cor} aluga-se`);
        }

        //
        ocupada(){
            console.log(`${this.cor} alugada`);
        }  

    
    }
//
const casa1 = new Casa(250, 3,"Branca", 2);
console.log("Casa 1: ", casa1);

//
const casa2 = new Casa(459, 2,"Rosa", 1);
console.log("Casa 2 :", casa2);

//
const casa3 = new Casa(675, 6, "Bege", 2);
console.log("Casa 3:", casa3);


console.log("-----------------");
console.log("Atributos do Casa 1:");
console.log("Número da casa:", casa1.numero);
console.log("Quantidade de Quartos:", casa1.quarto);
console.log("Cor da casa:", casa1.cor);
console.log("Quantidade de Banheiros:", casa1.banheiro);
console.log("------------------");
//metodo
casa1.ocupada();

console.log("-----------------");
console.log("Atributos do Casa 2:");
console.log("Número da casa:", casa2.numero);
console.log("Quantidade de Quartos:", casa2.quarto);
console.log("Cor da casa:", casa2.cor);
console.log("Quantidade de Banheiros:", casa2.banheiro);
console.log("------------------");
//metodo
casa2.alugar();


console.log("-----------------");
console.log("Atributos da Casa 3:");
console.log("Número da casa:", casa3.numero);
console.log("Quantidade de Quartos:", casa3.quarto);
console.log("Cor da casa:", casa3.cor);
console.log("Quantidade de Banheiros:", casa3.banheiro);
console.log("------------------");

//metodo
casa3.comprar();
