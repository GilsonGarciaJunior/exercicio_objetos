class garagem{
    constructor(nome, modelo, anoFabricado, anoModelo){
        this.nome = nome;
        this.modelo = modelo;
        this.anoFabricado = anoFabricado;
        this.anoModelo = anoModelo;
    }
    
    exibir() {
        console.log(`Nome: ${this.nome}, Modelo: ${this.modelo}, Ano de Fabricação: ${this.anoFabricado} ,Ano do modelo: ${this.anoModelo}`);
    }
}

class Moto extends garagem{
    constructor (nome, modelo, anoFabricado, anoModelo){
        super(nome, modelo, anoFabricado, anoModelo);
    }

    exibir() {
        super.exibir();
    }
}

class Carro extends garagem{
    constructor (nome, modelo, anoFabricado, anoModelo){
        super(nome, modelo, anoFabricado, anoModelo);
    }
    
    exibir() {
        super.exibir();
    }
}

const carroAlex = new Carro("Lancia", "Stratos HF ", "1973", "1974");
const carroHenrique = new Carro("Audi", "Quattro", "1980", "1983");
const motoMaria = new Moto("Honda", "CG 160", "2015", "2026");
const motoJuan = new Moto("Yamaha", "Fazer", "2005", "2006");

carroAlex.exibir();
carroHenrique.exibir();
motoJuan.exibir();
motoMaria.exibir();