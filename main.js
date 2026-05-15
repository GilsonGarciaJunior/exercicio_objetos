function Carro(nome, modelo, anoFrabricado, anoModelo, velocidadeMax) {
    this.nome = nome;
    this.modelo = modelo;
    this.anoFrabricado = anoFrabricado;
    this.anoModelo = anoModelo;
    this.velocidadeMax = velocidadeMax;
}

const carroAlex = new Carro("Lancia", "Stratos HF ", 1973, 1974, "230 km/h");
const carroHenrique = new Carro("Audi", "Quattro", 1980, 1983, "220 km/h");