const modulo1 = require('./mod1')
const nome = require('./mod1').nome
const { sobrenome } = require('./mod1')
const { Pessoa } = require('./mod1')
const axios = require('axios') // padrao do node, nao precisamos especificar o caminho
// const multiplicacao = require('./mod1')


console.log(modulo1.nomeCompleto())

console.log(nome)

console.log(sobrenome)

console.log(modulo1.coisaDoThis)

const p1 = new Pessoa(nome, sobrenome)
console.log(p1)

async function carregaApi() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        console.log(response.data)
    }
    catch (e) {
        console.log(e)
    }
}

carregaApi()

// console.log(multiplicacao(2, 4))