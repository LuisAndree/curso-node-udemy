require('dotenv').config()
const express = require('express')
const app = express()
const helmet = require('helmet')
const csrf = require('csurf')

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('conectei a base de dados')
        app.emit('pronto')
    }).catch(e => console.log(e))

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const routes = require('./routes')
const path = require('path')
const { meuMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middleware/middleware')

//          criar    ler  atualizar  deletar
//  CRUD -> CREATE, READ,   UPDATE,  DELETE
//           post    get     put     delete

// http://meusite.com/ <- GET -> entrega da pagina

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static(path.resolve(__dirname, 'public')))

app.use(helmet())

const sessionOptions = session({
    secret: 'abcdefghjlmnopqrstuvxz',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias em milesegundos
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(flash())

app.use(csrf())

app.use(meuMiddleware)
app.use(checkCsrfError)
app.use(csrfMiddleware)

app.use(routes)

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.on('pronto', () => {
    app.listen(3001, () => {
        console.log('Acessar http://localhost:3001')
        console.log('servidor rodando na porta 3001')
    })
})
