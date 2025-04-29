const express =  require('express')

const  app = express()

app.get('/' , function (req, res){
   res.send('Home  da  aplicação')
})

app.get('/animais', function(req,res){
    res.send('Página de  listagem  de  animais')
})

app.get('/animais/:id', function(req,res){
    res.send(`animal  de  id : ${req.params.id}`)
})

app.get('/dashboard', function(req, res){
    res.send('Página  de dashboard')
})

app.listen(8081, function(){
    console.log('Servidor  funcionando')
})
