function Animal(nome) {
    this.nome = nome; 

    this.fazerSom = function() {
        console.log("Rawwwr!");
    }
}

function Cachorro(nome, raça) {
    this.nome = nome;
    let _raça = raça;
    Animal.call(this, nome);

    this.getRaça = function(){
        return _raça;
    }

    this.setRaça = function(valor) {
        _raça = valor;
    }

    this.fazerSom = function() {
        console.log("Au Au!");
    }
}

function Gato(nome, raça) {
    this.nome = nome;
    let _raça = raça;
    Animal.call(this, nome);

    this.getRaça = function(){
        return _raça;
    }

    this.setRaça = function(valor) {
        _raça = valor;
    }

    this.fazerSom = function() {
        console.log("Miaaaau");
    }
}

const animal1 = new Cachorro("Cleiton", "Golden Retriever");
const animal2 = new Cachorro("Josemar", "Pincher")
const animal3 = new Gato("Gilmar", "Persa");

console.log(animal1.nome);
console.log(animal2.nome);
console.log(animal3.nome);

animal2.setRaça("Chihuahua");

console.log(animal1.getRaça());
console.log(animal2.getRaça());
console.log(animal3.getRaça());
