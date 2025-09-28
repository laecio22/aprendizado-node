exports.paginaInicial = (req, res) => {
    res.send("Página de  Listagem de animais")
}

exports.animalEspecifico = (req, res) => {
    console.log(req.params.id)
    console.log(req.query)
    res.send(`Animal de  id: ${req.params.id}`)
}