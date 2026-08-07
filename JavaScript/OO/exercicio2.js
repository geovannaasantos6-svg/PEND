class Aluno{

        //construtor executado automaticamente quando criamos um novo objeto
        constructor(nome,idade,curso,matricula){

            //Aquele Atributo pertence ao objeto 
            this.nome = nome;
            this.idade = idade;
            this.curso = curso;
            this.matricula = matricula;
        } 
        aprender(){
            console.log(`${this.nome} aprendendo`);
        }
        //

        estudar(){
            console.log(`${this.nome} estudando`);
        }

        //
        apresentar(){
            console.log(`${this.nome} apresentando`);
        }  

    
    }
//
const aluno1 = new Aluno("Bianca", 16,"Qualidade", 27);
console.log("Aluno 1: ", aluno1);

//
const aluno2 = new Aluno("Pietra", 15,"Logistica", 67);
console.log("Aluno 2 :", aluno2);

//
const aluno3 = new Aluno("Rafael", 17, "Desenvolvimento de Sistemas", 48);
console.log("Aluno 3:", aluno3);


console.log("-----------------");
console.log("Informações do Aluno 1:");
console.log("Nome:", aluno1.nome);
console.log("Idade:", aluno1.idade);
console.log("Curso:", aluno1.curso);
console.log("Numero da Matricula:", aluno1.matricula);
console.log("------------------");
//metodo
aluno1.aprender();

console.log("-----------------");
console.log("Informações do Aluno 2:");
console.log("Nome:", aluno2.nome);
console.log("Idade:", aluno2.idade);
console.log("Curso:", aluno2.curso);
console.log("Numero da Matricula:", aluno2.matricula);
console.log("------------------");
//metodo
aluno2.aprender();

console.log("-----------------");
console.log("Informações do Aluno 3:");
console.log("Nome:", aluno3.nome);
console.log("Idade:", aluno3.idade);
console.log("Curso:", aluno3.curso);
console.log("Numero da Matricula:", aluno3.matricula);
console.log("------------------");
//metodo
aluno3.apresentar();