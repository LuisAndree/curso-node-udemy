module.exports = (req, res, next) => {
    console.log('PAssei no middleware global')
    next()
}