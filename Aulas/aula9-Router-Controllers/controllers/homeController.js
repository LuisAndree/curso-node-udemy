exports.paginaInicial = (req, res) => {
    res.send(`
              <form action="/" method="POST">
                Nome do cliente = <input type="text" name="Nome">
                <button>AOOOBAAAA BAOOOOO</button>
                </form>    
            `)
}

exports.trataPost = (req, res) => {
    res.send('BAOOOOOOO')
}