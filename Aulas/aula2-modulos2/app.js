module.exports = class Cacorro {
    constructor(nome) {
        this.nome = nome
    }

    latir() {
        return console.log(`${this.nome} esta latindo`)
    }
}