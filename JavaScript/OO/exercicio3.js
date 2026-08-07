class Produto{

        //construtor executado automaticamente quando criamos um novo objeto
        constructor(nome,preco,estoque){

            //Aquele Atributo pertence ao objeto 
            this.nome = nome;
            this.preco = preco;
            this.estoque = estoque;
        } 
        vender(){
            console.log(`${this.nome} vendendo`);
        }
        //

        repor(){
            console.log(`${this.nome} reposição`);
        }

        //
        alterarPreco(){
            console.log(`${this.nome} alterar`);
        }  

    
    }
//
const produto1 = new Produto("Arroz", 16 , 27);
console.log("produto 1: ", produto1);

const produto2 = new Produto("Oléo", 10 , 40);
console.log("produto 2: ", produto2);

const produto3 = new Produto("Café", 19 , 20);
console.log("produto 3: ", produto3);


console.log("-----------------");
console.log("Informações do Arroz:");
console.log("Nome:", produto1.nome);
console.log("Preço:", produto1.preco);
console.log("Quantidade em Estoque:", produto1.estoque);
console.log("------------------");
//metodo
produto1.vender();

console.log("-----------------");
console.log("Informações do Oléo:");
console.log("Nome:", produto2.nome);
console.log("Preço:", produto2.preco);
console.log("Quantidade em Estoque:", produto2.estoque);
console.log("------------------");
//metodo
produto2.repor();

console.log("-----------------");
console.log("Informações do Café:");
console.log("Nome:", produto3.nome);
console.log("Preço:", produto3.preco);
console.log("Quantidade em Estoque:", produto3.estoque);
console.log("------------------");
//metodo
produto3.alterarPreco();

