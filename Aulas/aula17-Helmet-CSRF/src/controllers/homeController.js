const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Titulo de testes 2',
    descricao: 'descricao de testes 2'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e))


exports.paginaInicial = (req, res) => {
    // console.log('respondendo o cliente')
    res.render('index', {
        titulo: 'Titulo na <spam style="color:red"> view </spam> Teste',
        numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        arrayDeStrings: ['a', 'b', 'c', 'd', 'e']
    })
    return
    // console.log(`'PAginaInicial' olha oq tem na req.session.nome ${req.session.nome}`)
    // res.send(`
    //           <form action="/" method="POST">
    //             Nome do cliente = <input type="text" name="Nome">
    //             <button>AOOOBAAAA BAOOOOO</button>
    //             </form>    
    //         `)
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}