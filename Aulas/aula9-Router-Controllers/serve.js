const express = require('express')
const app = express()
const routes = require('./routes')

//          criar    ler  atualizar  deletar
//  CRUD -> CREATE, READ,   UPDATE,  DELETE
//           post    get     put     delete

// http://meusite.com/ <- GET -> entrega da pagina

app.use(routes)
app.listen(3001, () => {
    console.log('Acessar http://localhost:3001')
    console.log('servidor rodando na porta 3001')
})