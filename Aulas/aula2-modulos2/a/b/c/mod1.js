const Cachorrinho = require('../../../app')
const path = require('path') 

console.log('1 - ', path.resolve(__dirname))
console.log('2 - ',path.resolve(__dirname, '..', '..', '..')) // volta 3 pastas '..' é pra voltar pastas
console.log('3 - ',path.resolve(__dirname, '..', '..', '..', 'a2', 'b2', 'c2')) // voltou 3 pastas e avançou nas 3 especificadas
//    ./  acessa as coisas na msm pasta
//   ../  volta uma pasta referente a que o arquivo está
console.log(__filename) // busca o path do arquivo desda pasta raiz
console.log(__dirname)  // path do diretorio desda pasta raiz

const c1 = new Cachorrinho('Chaulin')
c1.latir()

