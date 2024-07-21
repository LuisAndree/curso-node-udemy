const nome = 'Luis'
const sobrenome = 'André'

const nomeCompleto = () => nome + ' ' + sobrenome

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome,
        this.sobrenome = sobrenome
    }    

}

module.exports.nome = nome
exports.sobrenome = sobrenome
exports.nomeCompleto = nomeCompleto
this.coisaDoThis = 'Coisa do this' 

exports.Pessoa = Pessoa

// module.exports = function(x, y) {
//     return x * y
// }

