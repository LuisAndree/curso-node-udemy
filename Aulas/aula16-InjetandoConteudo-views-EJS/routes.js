const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

// function meuMiddleware(req, res, next){
//     req.session = { nome: 'Luis', sobrenome: 'Andre'}
//     console.log()
//     console.log('Passei no middleware')
//     console.log()
//     next()
// }

// rotas da home
route.get('/', homeController.paginaInicial)
    // console.log(`'Ultimo middleware' olha oq tem na req.session.nome ${req.session.nome}`)

route.post('/', homeController.trataPost)

// rotas de contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route