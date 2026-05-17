function veiculos(nome, modelo) {  
    this.nome = nome;
    this.modelo = modelo;
}

function Moto (nome, modelo, anoFabricado, anoModelo){
    this.nome = nome;
    this.modelo = modelo;
    this.anoFabricado = anoFabricado;
    this.anoModelo = anoModelo;

    veiculos.call();
}

function Carro (nome, modelo, anoFabricado, anoModelo){
    this.nome = nome;
    this.modelo = modelo;
    this.anoFabricado = anoFabricado;
    this.anoModelo = anoModelo;
    
    veiculos.call();
}

const carroAlex = new Carro("Lancia", "Stratos HF ", "1973", "1974");
const carroHenrique = new Carro("Audi", "Quattro", "1980", "1983");
const motoMaria = new Moto("Honda", "CG 160", "2015", "2026");
const motoJuan = new Moto("Yamaha", "Fazer", "2005", "2006");

console.log(carroAlex);
console.log(carroHenrique);
console.log(motoJuan);
console.log(motoMaria);