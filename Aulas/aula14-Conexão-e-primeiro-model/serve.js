require('dotenv').config()
const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('conectei a base de dados')
        app.emit('pronto')
    }).catch(e => console.log(e))

const routes = require('./routes')
const path = require('path')
const meuMiddleware = require('./src/middleware/middleware')

//          criar    ler  atualizar  deletar
//  CRUD -> CREATE, READ,   UPDATE,  DELETE
//           post    get     put     delete

// http://meusite.com/ <- GET -> entrega da pagina

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, 'public')))

app.use(meuMiddleware)

app.use(routes)

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.on('pronto', () => {
    app.listen(3001, () => {
        console.log('Acessar http://localhost:3001')
        console.log('servidor rodando na porta 3001')
    })
})
