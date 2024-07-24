module.exports = (req, res, next) => {
    res.locals.umaVariavelLocal = 'este é o valor da variavel local'
    console.log('PAssei no middleware global')
    next()
}