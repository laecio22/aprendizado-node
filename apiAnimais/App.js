
const express = require("express");

const app = express();
const routes = require("./routes")

app.use(express.urlencoded({extended:true}))
app.use(routes)



// app.get("/animais", (req, res) => {
//   res.send("Página de  listagem  de  animais");
// });

// app.get("/animais/:id", (req, res) => {
//   console.log(req.params.id)
//   console.log(req.query.nome)
//   res.send(`animal  de  id : ${req.params.id}`);
// });

// app.get("/dashboard", (req, res) => {
//   res.send("Página  de dashboard");
// });

// app.get("/eventos", (req, res) => {
//   res.send("Página  de  Eventos");
// });

// app.get("/voluntarios", (req, res) => {
//   res.send("Página  de voluntarios");
// });

// app.get("/adocoes", (req, res) => {
//   res.send("Página  de  adoções");
// });

// app.get("/configuracoes", (req, res) => {
//   res.send("Página  de configurações");
// });

app.listen(8081, () => {
  console.log("Acessar  http://localhost:8081");
  console.log("Servidor  funcionando");
});
