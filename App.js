const express =  require('express')

const  app = express()

app.get('/' ,  (req, res) =>{
   res.send('Home  da  aplicação')
})

app.get('/animais', (req,res ) =>{
    res.send('Página de  listagem  de  animais')
})

app.get('/animais/:id', (req,res) => {
    res.send(`animal  de  id : ${req.params.id}`)
})

app.get('/dashboard', (req, res) => {
    res.send('Página  de dashboard')
})

app.get('/eventos', (req, res)=>{
   res.send('Página  de  Eventos')
})

app.get('/voluntarios', (req, res)=>{
    res.send('Página  de voluntarios')
})

app.get('/adocoes', (req, res)=> {
 res.send('Página  de  adoções')
})

app.get('/configuracoes', (req, res)=> {
   res.send('Página  de configurações')
})

app.listen(8081, () =>{
    console.log('Acessar  http://localhost:8081')
    console.log('Servidor  funcionando')
})
