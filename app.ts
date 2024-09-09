class Perguntas{
    protected nome:string
    protected idade:number
    protected estudoLinguagem: string
    constructor(nome:string, idade:number, estudoLinguagem:string){
        this.nome = nome;
        this.idade = idade;
        this.estudoLinguagem = estudoLinguagem;
    };

    public chamarUser():any {
        return(`Olá ${this.nome}, você tem ${this.idade} anos e já está aprendendo ${this.estudoLinguagem}!`)
    };
};


class Pessoa extends Perguntas{};
const pessoa1 = new Pessoa("Gabriel", 14, "TypeScript");
console.log(pessoa1.chamarUser());

