const express = require('express')
const app = express()

//          criar    ler  atualizar  deletar
//  CRUD -> CREATE, READ,   UPDATE,  DELETE
//           post    get     put     delete

// http://meusite.com/ <- GET -> entrega da pagina

app.get('/', (req, res) => {
    res.send('Hello <b>World!!!A NODEMON</b>')
})
app.get('/contato', (req, res) => {
    res.send('TENQUI SUPORTI')
})

app.listen(3001, () => {
    console.log('Acessar http://localhost:3001')
    console.log('servidor rodando na porta 3001')
})